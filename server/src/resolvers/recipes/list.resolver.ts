import { Resolver, Query, Arg } from "type-graphql";
import { Recipe, RecipeCategory } from "../../entity/Recipe";

@Resolver()
export class RecipesListResolver {
  @Query(() => [Recipe])
  async recipes() {
    return await Recipe.find();
  }

  @Query(() => [Recipe])
  async recipeByCategory(@Arg("cat_id") cat_id: string): Promise<Recipe[]> {
    if (!cat_id) {
      return [];
    }

    const category = await RecipeCategory.findOne({
      relations: ["recipes"],
      where: { id: cat_id },
    });
    return category?.recipes || [];
  }
}
