import { Resolver, Query, UseMiddleware, Ctx } from "type-graphql";
import { MealRecipes } from "../../entity/Meals";
import { Ingredient } from "../../entity/Recipe/Ingredient";
import { isUserAuth } from "../../utils/middlewares/auth.mw";
import { GroceryListResponse } from "../../utils/responses/grocery";
import { User } from "../../entity/User";
import { IContext } from "src/utils/types/Context";

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
    for (let meal of meals) {
      if (
        new Date(meal.date).toLocaleDateString() >= NOW.toLocaleDateString()
      ) {
        console.log("ingredients: ", meal.recipe.ingredients);
        ingredients.push(...meal.recipe.ingredients);
      }
    }

    return ingredients;
  }
}
