import { Resolver, Query, Arg } from "type-graphql";
import { Recipe, RecipeCategory } from "../../entity/Recipe";

@Resolver()
export class RecipesListResolver {
  @Query(() => [Recipe])
  async recipes() {
    return await Recipe.find({ where: { public: true } });
  }

  @Query(() => [Recipe])
  async recipeByCategory(@Arg("cat_id") cat_id: string): Promise<Recipe[]> {
    if (!cat_id) {
      return [];
    }

    try {
      let category: RecipeCategory | undefined;
      if (cat_id == "NO") category = (await RecipeCategory.find())[0];
      else category = await RecipeCategory.findOne({ where: { id: cat_id } });
      if (!category) {
        return [];
      }
      const recipes = await Recipe.find({
        where: { category: category, public: true },
      });
      return recipes;
    } catch (e) {
      console.log("Sonething went wrong : ", e);
      return [];
    }
  }
}
