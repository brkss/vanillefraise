import { Resolver, Query, UseMiddleware, Ctx, Arg } from "type-graphql";
import { isUserAuth } from "../../utils/middlewares";
import { User } from "../../entity/User";
import { IContext } from "../../utils/types/Context";
import { NutritionIntakeChartResponse } from "../../utils/responses/nutrition";
import { CookedRecipe } from "../../entity/UserInfo";
import { mergeDates } from "../../utils/helpers";

@Resolver()
export class NutrionIntakeChartResolver {
  @UseMiddleware(isUserAuth)
  @Query(() => [NutritionIntakeChartResponse])
  async nutritionIntakeChart(
    @Arg("code") code: string,
    @Ctx() ctx: IContext
  ): Promise<NutritionIntakeChartResponse[]> {
    if (!code) return [];
    const user = await User.findOne({ where: { id: ctx.payload.userID } });
    if (!user) return [];

    const cooked = await CookedRecipe.find({
      where: { user: user },
      relations: ["recipe", "recipe.totalnutrition"],
      order: { created_at: "ASC" },
    });
    const data: NutritionIntakeChartResponse[] = [];
    for (let cookedRecipe of cooked) {
      const intake =
        cookedRecipe.recipe.totalnutrition.find((x) => x.code === code)
          ?.quantity || 0;
      let obj: NutritionIntakeChartResponse;
      obj = {
        intake: intake,
        date: cookedRecipe.created_at.toString(),
      };
      data.push(obj);
    }
    const results = mergeDates(data);
    return results.reverse().slice(0, 7) as any;
  }
}
