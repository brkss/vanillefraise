import { Resolver, Mutation, UseMiddleware, Arg, Ctx } from "type-graphql";
import { isUserAuth } from "../../utils/middlewares";
import { DefaultResponse } from "../../utils/responses";
import { User } from "../../entity/User";
import { IContext } from "../../utils/types/Context";
import { MealRecipes } from "../../entity/Meals";
import { RemoveMealRecipeInput } from "../../utils/inputs/meals";
import { Recipe } from "../../entity/Recipe";
import { Meal } from "../../entity/Meals/Meal";

@Resolver()
export class MealRecipeResolver {
  @UseMiddleware(isUserAuth)
  @Mutation(() => DefaultResponse)
  async removeRecipe(
    @Arg("data") data: RemoveMealRecipeInput,
    @Ctx() ctx: IContext
  ): Promise<DefaultResponse> {
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
    const recipe = await Recipe.findOne({ where: { id: data.recipeid } });
    const meal = await Meal.findOne({ where: { id: data.mealid } });
    if (!meal || !recipe)
      return {
        status: false,
        message: "Invalid Recipe !",
      };
    const mealRecipe = await MealRecipes.findOne({
      where: { recipe: recipe, meal: meal, user: user },
    });
    if (!mealRecipe)
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
