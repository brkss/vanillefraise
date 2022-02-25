import { Resolver, Mutation, Query } from "type-graphql";
import { RecipeCategory } from "../../entity/Recipe";
import { recipe_categories } from "../../utils/data/recipe_categories";

@Resolver()
export class RecipeCategoryResolver {
  @Query(() => [RecipeCategory])
  async recipeCategories(): Promise<RecipeCategory[]> {
    return await RecipeCategory.find({where: {active: true}, relations: ['recipes']});
  }

  @Mutation(() => Boolean)
  async seedRecipeCategories(): Promise<boolean> {
    const categories = await RecipeCategory.find();
    if (categories.length == 0) {
      for (let c of recipe_categories) {
        const category = new RecipeCategory();
        category.name = c.name;
        category.icon = c.icon;
        await category.save();
      }
      return true;
    }
    return false;
  }
}
