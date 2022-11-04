import { Resolver, Mutation, UseMiddleware, Arg, Ctx } from "type-graphql";
import { isUserAuth } from "../../utils/middlewares/auth.mw";
import { IContext } from "../../utils/types/Context";
import { User } from "../../entity/User";
import { Recipe, RecipeReport } from "../../entity/Recipe";
import { ReportRecipeResponse } from "../../utils/responses/recipes";

@Resolver()
export class ReportRecipeResolver {
  @UseMiddleware(isUserAuth)
  @Mutation(() => ReportRecipeResponse)
  async reportRecipe(
    @Arg("recipe_id") recipe_id: string,
    @Ctx() ctx: IContext
  ): Promise<ReportRecipeResponse> {
    if (!recipe_id) return { message: "Invalid Data !", status: false };

    const user = await User.findOne({ where: { id: ctx.payload.userID } });
    const recipe = await Recipe.findOne({ where: { id: recipe_id } });
    if (!user || !recipe) return { message: "Invalid Recipe !", status: false };

    const alreadyReported = await RecipeReport.findOne({
      where: { user: user, recipe: recipe },
    });
    if (alreadyReported)
      return {
        status: false,
        message: "You already reported this recipe !",
      };
    const report = new RecipeReport();
    report.recipe = recipe;
    report.user = user;
    await report.save();
    return {
      message: "Thank you ! recipe reported successfuly !",
      status: true,
    };
  }
}
