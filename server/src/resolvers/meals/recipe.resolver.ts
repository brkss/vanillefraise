import { Resolver, Mutation, UseMiddleware, Arg, Ctx } from "type-graphql";
import { isUserAuth } from "../../utils/middlewares";
import { DefaultResponse } from "../../utils/responses";
import { User } from "../../entity/User";
import { IContext } from "../../utils/types/Context";
import { MealRecipes } from "../../entity/Meals";
import { RemoveMealRecipeInput } from "../../utils/inputs/meals";

@Resolver()
export class MealRecipeResolver {
  @UseMiddleware(isUserAuth)
  @Mutation(() => DefaultResponse)
  async removeRecipe(
    @Arg("data") data: RemoveMealRecipeInput,
    @Ctx() ctx: IContext
  ): Promise<DefaultResponse> {
    console.log("trying to delete recipe ! ");
    if (!data.mealid || !data.recipeid)
      return {
        status: false,
        message: "Invalid Data !",
      };
    const user = await User.findOne({ where: { id: ctx.payload.userID } });
    if (!user)
      return {
        status: false,
        message: "Invalid User !",
      };
    const mealRecipe = await MealRecipes.findOne({
      where: { id: data.mealid, user: user },
    });
    if (!mealRecipe || mealRecipe.cooked)
      return {
        status: false,
        message: "Invalid Recipe !",
      };
    await mealRecipe.remove();
    return {
      status: true,
      message: "Recipe Removed Successfuly !",
    };
  }
}
