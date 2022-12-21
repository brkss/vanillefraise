import { Resolver, Query, Arg } from "type-graphql";
import { Recipe } from "../../entity/Recipe";
import {
  RecipeItemResponse,
} from "../../utils/responses/recipes";

@Resolver()
export class RecipeItemResolver {
 

  @Query(() => RecipeItemResponse)
  async recipe(@Arg("id") id: string): Promise<RecipeItemResponse> {
    if (!id) {
      return {
        status: false,
        message: "Invalid data !",
      };
    }
    const recipe = await Recipe.findOne({
      where: { id: id },
      relations: ["instructions", "ingredients", "healthlabel"],
    });
    if (!recipe)
      return {
        status: false,
        message: "Recipe Not Found !",
      };
    const ingredients = recipe.ingredients
    const instructions =  recipe.instructions 
    if (!recipe) {
      return {
        status: false,
        message: "Recipe Not Found !",
      };
    }
    return {
      status: true,
      recipe: recipe,
      ingredients: ingredients,
      instructions: instructions,
    };
  }
}
