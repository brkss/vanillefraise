import { Resolver, Query } from "type-graphql";
import { Recipe } from "../../entity/Recipe";

@Resolver()
export class RecipesListResolver {
  @Query(() => [Recipe])
  async recipes() {
    return await Recipe.find();
  }
}
