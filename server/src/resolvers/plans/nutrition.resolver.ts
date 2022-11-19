import { Resolver, Query, UseMiddleware, Ctx } from "type-graphql";
import { isUserAuth } from "../../utils/middlewares/auth.mw";
import { User } from "../../entity/User";
import { IContext } from "../../utils/types/Context";
import { NutritienCategory } from "../../entity/Nutrition/NutrientCategory";
import { NewPlanNutritionResponse } from "../../utils/responses";

@Resolver()
export class PlanNutritionResolver {
  @UseMiddleware(isUserAuth)
  @Query(() => [NewPlanNutritionResponse])
  async newPlanNutritions(
    @Ctx() ctx: IContext
  ): Promise<NewPlanNutritionResponse[]> {
    const user = await User.findOne({ where: { id: ctx.payload.userId } });
    if (!user) {
      return [];
    }

    const nutritions = await NutritienCategory.find({
      relations: ["nutrients"],
    });
    const results: NewPlanNutritionResponse[] = [];

    for (let n of nutritions) {
      
      const obj: NewPlanNutritionResponse = {
        category: n,
        items: n.nutrients.map((nutrition) => ({
          nutrition: nutrition,
          recommendation: 0,
        })),
      };
      results.push(obj);
    }

    return results;
  }
}
