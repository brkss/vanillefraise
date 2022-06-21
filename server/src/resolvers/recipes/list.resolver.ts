import { Resolver, Query, Arg, UseMiddleware, Ctx } from "type-graphql";
import { Recipe, RecipeCategory } from "../../entity/Recipe";
import { isUserAuth } from "../../utils/middlewares";
import { User } from "../../entity/User";
import { IContext } from "../../utils/types/Context";
import { filterRecipes } from "../../utils/helpers/FilterRecipes";
//import { checkFilter } from '../../utils/helpers/checkRecipeFilter';

@Resolver()
export class RecipesListResolver {
  @Query(() => [Recipe])
  async recipes() {
    return await Recipe.find({ where: { public: true } });
  }

  @UseMiddleware(isUserAuth)
  @Query(() => [Recipe])
  async recipeByCategory(
    @Arg("cat_id") cat_id: string,
    @Ctx() ctx: IContext
  ): Promise<Recipe[]> {
    if (!cat_id) {
      return [];
    }
    try {
      const user = await User.findOne({ where: { id: ctx.payload.userID } });
      if (!user) return [];
      let category: RecipeCategory | undefined;
      if (cat_id == "NO")
        category = (
          await RecipeCategory.find({
            relations: ["recipes", "recipes.healthlabel"],
          })
        )[0];
      else
        category = await RecipeCategory.findOne({
          where: { id: cat_id },
          relations: ["recipes", "recipes.healthlabel"],
        });
      if (!category) {
        return [];
      }
      const recipes = category.recipes.filter((r) => r.public === true);
      const data = await filterRecipes(recipes, user);
      return data;
    } catch (e) {
      console.log("Sonething went wrong : ", e);
      return [];
    }
  }
}
