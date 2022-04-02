import { Resolver, Query, Arg } from "type-graphql";
import { Recipe } from "../../entity/Recipe";
import { Like } from 'typeorm';

@Resolver()
export class SearchRecipeResolver {
  @Query(() => [Recipe])
  async searchRecipes(@Arg("query") query: string): Promise<Recipe[]> {
    // search in recipes
    const recipes = await Recipe.find({where: {
      name: Like(`%${query}%`)
    }});

    // search in ingredients
    

    // search in nutritions

    return [];
  }
}
