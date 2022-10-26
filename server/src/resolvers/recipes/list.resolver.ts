import { Resolver, Query, Arg, UseMiddleware, Ctx } from "type-graphql";
import { Recipe, RecipeCategory } from "../../entity/Recipe";
import { isUserAuth } from "../../utils/middlewares";
import { User } from "../../entity/User";
import { IContext } from "../../utils/types/Context";
import { filterRecipes } from "../../utils/helpers/FilterRecipes";
//import { checkFilter } from '../../utils/helpers/checkRecipeFilter';
import { RecipeByCategoryInput } from "../../utils/inputs/recipes";
import { random } from "../../utils/helpers/random";

@Resolver()
export class RecipesListResolver {
  @Query(() => [Recipe])
  async recipes() {
    return await Recipe.find({ where: { public: true } });
  }

  @UseMiddleware(isUserAuth)
  @Query(() => [Recipe])
  async recipeByCategory(
    @Arg("data") data: RecipeByCategoryInput,
    @Ctx() ctx: IContext
  ): Promise<Recipe[]> {
    if (!data || !data.batch || !data.cat_id || !data.seed) {
      return [];
    }
    try {
      const step = 10;
      /*
       * TODO
       * Must generate and send seed back to the client !
      let seed = Math.floor(Math.random() * 1000);
      if(data.seed === -1)
        seed = data.seed;
      */
      const user = await User.findOne({ where: { id: ctx.payload.userID } });
      if (!user) return [];
      let category: RecipeCategory | undefined;
      if (data.cat_id == "NO")
        category = (
          await RecipeCategory.find({
            relations: ["recipes", "recipes.healthlabel"],
          })
        )[0];
      else
        category = await RecipeCategory.findOne({
          where: { id: data.cat_id },
          relations: ["recipes", "recipes.healthlabel"],
        });
      if (!category) {
        return [];
      }
      const recipes = category.recipes.filter((r) => r.public === true);
      const results = await filterRecipes(recipes, user);
      console.log("get recipes ! ");
      return results
        .sort((_) => random(data.seed) - 0.5)
        .slice(step * data.batch - step, step * data.batch);
    } catch (e) {
      console.log("Sonething went wrong : ", e);
      return [];
    }
  }
}
