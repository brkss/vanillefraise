import { Resolver, Mutation, Arg } from "type-graphql";
const recipeScraper = require("recipe-scraper");

@Resolver()
export class CreateRecipeResolver {
  @Mutation(() => Boolean)
  async createRecipe(@Arg("uri") uri: string): Promise<boolean> {
    if (!uri) return false;
    try {
      const recipe = await recipeScraper(uri);
      console.log("recipe => ", recipe);
    } catch (e) {
      console.log("something went wrong : ", e);
      return false;
    }
    return true;
  }
}
