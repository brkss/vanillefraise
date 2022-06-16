import { Resolver, Query, UseMiddleware, Ctx } from "type-graphql";
import { HealthLabelRefrence } from "../../entity/Nutrition/HealthLabelReference";
import { CookedRecipe } from "../../entity/UserInfo";
import { Recipe } from "../../entity/Recipe/";
import { RecipeTotalNutrition } from "../../entity/Nutrition/TotalNutrition";
import { isUserAuth } from "../../utils/middlewares";
import { IContext } from "src/utils/types/Context";
import { User } from "../../entity/User";
import { CaloriesTrackResponse } from "../../utils/responses/diet";
import { DietRecord } from "../../entity/Diet/Record";

const getRecipeCal = (nutritients: RecipeTotalNutrition[]): number => {
  for (let n of nutritients) {
    if (n.code === "ENERC_KCAL") return n.quantity;
  }
  return 0;
};

@Resolver()
export class DietDataResolver {
  @Query(() => String)
  helloDietData(): string {
    return "hello from diet data !";
  }

  @Query(() => [HealthLabelRefrence])
  async healthLabels(): Promise<HealthLabelRefrence[]> {
    const hl = await HealthLabelRefrence.find();
    return hl;
  }

  @UseMiddleware(isUserAuth)
  @Query(() => [CaloriesTrackResponse])
  async trackCalories(@Ctx() ctx: IContext): Promise<CaloriesTrackResponse[]> {
    const user = await User.findOne({ where: { id: ctx.payload.userID } });
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
    for(let r of records){
      data.push({
        date: r.created_at,
        value: r.value
      })
    } 

    // return { date, value (number of calories !) }
    return data;
  }
}
