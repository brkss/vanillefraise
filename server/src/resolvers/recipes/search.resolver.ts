import { Resolver, Query, Arg } from "type-graphql";
import { Recipe, Ingredient } from "../../entity/Recipe";
import { RecipeTotalNutrition } from "../../entity/Nutrition/TotalNutrition";
import { Like } from "typeorm";
import { SearchResultResponse } from "../../utils/responses/recipes";

@Resolver()
export class SearchRecipeResolver {
  @Query(() => SearchResultResponse)
  async searchRecipes(
    @Arg("query") query: string
  ): Promise<SearchResultResponse> {
    // search in recipes
    const recipes = await Recipe.find({
      where: [
        { name: Like(`%${query}%`) },
        { description: Like(`%${query}%`) },
      ],
    });

    // search in ingredients
    const ingredients = await Ingredient.find({
      where: { raw: Like(`%${query}%`) },
      relations: ["recipe"],
    });

    // search in nutritions
    const nutritions = await RecipeTotalNutrition.find({
      where: { label: Like(`%${query}%`) },
      relations: ["recipe"],
    });

    return {
      ingredients: ingredients,
      recipes: recipes,
      nutritients: nutritions,
    };
  }
}
