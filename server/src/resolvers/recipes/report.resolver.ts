import { Resolver, Mutation, UseMiddleware, Arg, Ctx } from "type-graphql";
import { isUserAuth } from "../../utils/middlewares/auth.mw";
import { IContext } from "../../utils/types/Context";
import { User } from "../../entity/User";
import { Recipe, RecipeReport } from "../../entity/Recipe";

@Resolver()
export class ReportRecipeResolver {
  @UseMiddleware(isUserAuth)
  @Mutation(() => Boolean)
  async reportRecipe(
    @Arg("recipe_id") recipe_id: string,
    @Ctx() ctx: IContext
  ): Promise<boolean> {
    if (!recipe_id) return false;

    const user = await User.findOne({ where: { id: ctx.payload.userID } });
    const recipe = await Recipe.findOne({ where: { id: recipe_id } });
    if (!user || !recipe) return false;

    const alreadyReported = await RecipeReport.findOne({
      where: { user: user, recipe: recipe },
    });
    if (alreadyReported) return false;
    const report = new RecipeReport();
    report.recipe = recipe;
    report.user = user;
    await report.save();
    return true;
  }
}
