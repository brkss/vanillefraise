import { Resolver, Query, UseMiddleware, Ctx } from "type-graphql";
import { User } from "../../entity/User";
import { isUserAuth } from "../../utils/middlewares/auth.mw";
import { Recipe } from "../../entity/Recipe";
import { IContext } from "../../utils/types/Context";
import { filterRecipes } from "../../utils/helpers/FilterRecipes";

@Resolver()
export class RecomendedRecipesResolver {
  @UseMiddleware(isUserAuth)
  @Query(() => [Recipe])
  async recomnededRecipes(@Ctx() ctx: IContext): Promise<Recipe[]> {
    const user = await User.findOne({ where: { id: ctx.payload.userID } });
    if (!user) {
      return [];
    }
    console.log("found user !");
    const recipes = await Recipe.find({ relations: ["healthlabel"] });
    const filteredRecipes = await filterRecipes(recipes, user);
    return filteredRecipes.sort((_) => Math.random() - 0.5).slice(0, 10);
  }
}
