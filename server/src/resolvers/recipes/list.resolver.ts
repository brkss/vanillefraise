import { Resolver, Query } from "type-graphql";
import { Recipe, RecipeCategory } from "../../entity/Recipe";

@Resolver()
export class RecipesListResolver {
  @Query(() => [Recipe])
  async recipes() {
    return await Recipe.find();
  }


}
