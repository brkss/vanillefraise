import { Resolver, Query, UseMiddleware, Mutation, Arg } from "type-graphql";
import { Recipe } from "../../entity/Recipe";
import { isAdminAuth } from "../../utils/middlewares/admin.mw";
import { AdminRecipesResponse, DefaultResponse } from "../../utils/responses";

@Resolver()
export class AdminRecipeResolver {
  @UseMiddleware(isAdminAuth)
  @Query(() => [AdminRecipesResponse])
  async adminRecipes(): Promise<AdminRecipesResponse[]> {
    const recipes = await Recipe.find();
    let data: AdminRecipesResponse[] = [];
    for (let r of recipes) {
      const o: AdminRecipesResponse = {
        recipe: r,
      };
      data.push(o);
    }
    return data;
  }


  @UseMiddleware(isAdminAuth)
  @Mutation(() => DefaultResponse)
  async changeRecipeVisibility(@Arg('rid') rid: string) : Promise<DefaultResponse>{
    if(!rid){
      return {
        status: false,
        message: "Invalid Data !"
      }
    }
    const recipe = await Recipe.findOne({where: {id: rid}});
    if(!recipe){
      return {
        status: false,
        message: "Invalid Recipe !"
      }
    }
    recipe.public = !recipe.public;
    await recipe.save();
    return {
      status: true,
      message: "Recipe's visibility changed successfuly !"
    }
  }
}
