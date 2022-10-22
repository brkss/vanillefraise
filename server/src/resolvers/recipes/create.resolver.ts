import { Resolver, Mutation, Arg } from "type-graphql";
import { CreateRecipeResponse } from "../../utils/responses";
import { create_recipe } from "../../utils/helpers/recipe/create";
//import { CreateBulkRecipesInput } from "../../utils/inputs/recipes";
import { CreateRecipeInput } from "../../utils/inputs/recipes/createrecipe.input";
//import { CreateBulkRecipesInput } from "../../utils/inputs/recipes";
@Resolver()
export class CreateRecipeResolver {
  @Mutation(() => CreateRecipeResponse)
  async createRecipe(
    @Arg("data") data: CreateRecipeInput
  ): Promise<CreateRecipeResponse> {
    if (!data || !data.url || data.categories.length === 0)
      return {
        status: false,
        message: "Invalid data !",
      };
    try {
      const created = await create_recipe(data.url, data.categories);
      if (!created.success) {
        return {
          status: false,
          message: created.message || "Something went wrong !",
        };
      }
      return {
        status: true,
        message: "Success !",
        recipe: created.recipe,
      };
    } catch (e) {
      console.log("error accured creating recipe : ", e);
      return {
        status: false,
        message: "Something went wrong !",
      };
    }
  }
}
