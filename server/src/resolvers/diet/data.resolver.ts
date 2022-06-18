import { Resolver, Query, UseMiddleware, Ctx } from "type-graphql";
import { HealthLabelRefrence } from "../../entity/Nutrition/HealthLabelReference";
import { CookedRecipe } from "../../entity/UserInfo";
import { isUserAuth } from "../../utils/middlewares";
import { IContext } from "src/utils/types/Context";
import { User } from "../../entity/User";
import {
  CaloriesTrackResponse,
  DietHealthLabelResponse,
  TrackMacronutrientsResponse
} from "../../utils/responses/diet";
import { DietRecord } from "../../entity/Diet/Record";
import dayjs from "dayjs";
import { calculateREE, calculateTDEE } from "../../utils/helpers/macros";
import { RecipeHealthLabel } from "../../entity/Nutrition/HealthLabel";

@Resolver()
export class DietDataResolver {
  @Query(() => String)
  helloDietData(): string {
    return "hello from diet data !";
  }

  @Query(() => [DietHealthLabelResponse])
  async healthLabels(): Promise<DietHealthLabelResponse[]> {
    const hl = await HealthLabelRefrence.find();
    const data: DietHealthLabelResponse[] = [];
    for (let label of hl) {
      const recipehealthlabel = await RecipeHealthLabel.find({
        where: { label: label.label.split(" ").join("_") },
      });
      data.push({
        id: label.id,
        label: label.label,
        count: recipehealthlabel.length,
        description: label.description,
      });
    }
    return data;
  }

  @UseMiddleware(isUserAuth)
  @Query(() => [CaloriesTrackResponse])
  async trackCalories(@Ctx() ctx: IContext): Promise<CaloriesTrackResponse[]> {
    const user = await User.findOne({
      where: { id: ctx.payload.userID },
      relations: ["config"],
    });
    if (!user) return [];
    // find cooked recipes
    const cooked_recipes = await CookedRecipe.find({
      where: { user: user },
      relations: ["recipe", "recipe.totalnutrition"],
      order: { created_at: "ASC" },
    });
    const records = await DietRecord.find({
      where: { user: user, type: "IN_CALORIES" },
    });

    let data: CaloriesTrackResponse[] = [];
    for (let cr of cooked_recipes) {
      data.push({
        value:
          cr.recipe.totalnutrition.find((x) => x.code === "ENERC_KCAL")
            ?.quantity || 0,
        date: cr.created_at,
      });
    }
    for (let r of records) {
      data.push({
        date: r.created_at,
        value: r.value,
      });
    }
    let res: CaloriesTrackResponse[] = [];
    let l = data.length;

    for (let i = 0; i < l; i++) {
      const index = res.findIndex(
        (x) => dayjs(x.date).diff(data[i].date, "d") === 0
      );
      if (index === -1) {
        res.push(Object.assign({}, data[i]));
      } else if (index > -1) {
        res[index].value += data[i].value;
      }
    }
    const ree = calculateREE(user.gender, user.weight, user.height, user.birth);
    const tdee = calculateTDEE(user.config.activityFactor, ree);
    res = res.map((r) => ({
      date: r.date,
      value: r.value - tdee,
    }));
    res.unshift({ date: new Date(), value: 0 });
    // return { date, value (number of calories !) }
    return res;
  }

  @UseMiddleware(isUserAuth)
  @Query(() => [Number])
  async trackWeight(@Ctx() ctx: IContext): Promise<number[]> {
    const user = await User.findOne({ where: { id: ctx.payload.userID } });
    if (!user) return [];
    const records = await DietRecord.find({ where: { user: user } });
    const data: number[] = [];
    for (let r of records) {
      if (r.type === "WEIGHT") data.push(r.value);
    }
    return data;
  }
}
