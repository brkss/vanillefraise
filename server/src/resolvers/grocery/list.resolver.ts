import { Resolver, Query, UseMiddleware, Ctx } from "type-graphql";
import { MealRecipes } from "../../entity/Meals";
import { Ingredient } from "../../entity/Recipe/Ingredient";
import { isUserAuth } from "../../utils/middlewares/auth.mw";
//import { GroceryListResponse } from "../../utils/responses/grocery";
import { User } from "../../entity/User";
import { IContext } from "src/utils/types/Context";
import { mergeIngredients } from "../../utils/helpers/grocery/merge";

@Resolver()
export class GroceryResolver {
  /*
   * This way used to fetch grocery list is not well optimized
   * make sure to go through it and find a more optimized way to get groceries !
   */
  @UseMiddleware(isUserAuth)
  @Query(() => [Ingredient])
  async grocery(@Ctx() ctx: IContext): Promise<Ingredient[]> {
    const user = await User.findOne({ where: { id: ctx.payload.userID } });
    if (!user) {
      return [];
    }

    const meals = await MealRecipes.find({
      where: { user: user, cooked: false },
      relations: ["recipe", "recipe.ingredients"],
    });
    // filter meals (this is unpotimized af !)
    //const filred_meals : MealRecipes[] = [];
    const ingredients: Ingredient[] = [];
    const NOW = new Date();
    const LAST = new Date().setDate(new Date().getDate() + 7);
    for (let meal of meals) {
      if (
        new Date(meal.date).toLocaleDateString() >= NOW.toLocaleDateString() &&
        new Date(meal.date) <= new Date(LAST)
      ) {
        console.log("ingredients: ", meal.recipe.ingredients);
        ingredients.push(...meal.recipe.ingredients);
      }
    }

    return mergeIngredients(ingredients);
  }

  @UseMiddleware(isUserAuth)
  @Query(() => Number)
  async groceryCount(@Ctx() ctx: IContext): Promise<number> {
    const user = await User.findOne({ where: { id: ctx.payload.userID } });
    if (!user) return 0;
    const meals = await MealRecipes.find({
      where: { user: user, cooked: false },
      relations: ["recipe", "recipe.ingredients"],
    });
    const ingredients: Ingredient[] = [];
    const NOW = new Date();
    const LAST = new Date().setDate(new Date().getDate() + 7);
    for (let meal of meals) {
      if (
        new Date(meal.date).toLocaleDateString() >= NOW.toLocaleDateString() &&
        new Date(meal.date) <= new Date(LAST)
      ) {
        ingredients.push(...meal.recipe.ingredients);
      }
    }

    return mergeIngredients(ingredients).length;
  }
}
