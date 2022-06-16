import { Resolver, Query, UseMiddleware, Ctx } from "type-graphql";
import { HealthLabelRefrence } from "../../entity/Nutrition/HealthLabelReference";
import { CookedRecipe } from "../../entity/UserInfo";
import { Recipe } from "../../entity/Recipe/";
import { RecipeTotalNutrition } from "../../entity/Nutrition/TotalNutrition";
import { isUserAuth } from "../../utils/middlewares";
import { IContext } from "src/utils/types/Context";
import { User } from "../../entity/User";
import { CaloriesTrackResponse } from "../../utils/responses/diet";

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

    let data: CaloriesTrackResponse[] = [];
    data = cooked_recipes.map((cr) => {
      return {
        date: cr.created_at,
        value:
          cr.recipe.totalnutrition.find((x) => x.code === "ENERC_KCAL")
            ?.quantity || 0,
      };
    });
    // return { date, value (number of calories !) }
    return data;
  }
}
