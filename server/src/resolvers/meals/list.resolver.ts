import { isUserAuth } from "../../utils/middlewares";
import { IContext } from "../../utils/types/Context";
import { Resolver, Query, Arg, UseMiddleware, Ctx } from "type-graphql";
import { Meal, MealRecipes } from "../../entity/Meals";
import { MealRecipesInput } from "../../utils/inputs/meals";
import { MealRecipeResponse } from "../../utils/responses/meals";
import { User } from "../../entity/User";
import { Like } from "typeorm";

@Resolver()
export class ListMealsResolver {
  @Query(() => [Meal])
  async meals(): Promise<Meal[]> {
    const meals = await Meal.find();
    return meals;
  }

  @UseMiddleware(isUserAuth)
  @Query(() => MealRecipeResponse)
  async mealRecipes(
    @Arg("data") data: MealRecipesInput,
    @Ctx() ctx: IContext
  ): Promise<MealRecipeResponse> {
    const user = await User.findOne({ where: { id: ctx.payload.userID } });
    if (!user || !data.date || !data.meal) {
      return {
        status: false,
        message: "Invalid Data !",
      };
    }

    const meal = await Meal.findOne({ where: { id: data.meal } });
    if (!meal) {
      return {
        status: false,
        message: "Invalid Meal !",
      };
    }
    const mr = await MealRecipes.find({
      where: {
        meal: meal,
        date: Like(`%${data.date.toLocaleDateString()}%`),
      },
      relations: ["recipe", "recipe.ingredients"],
    });

    const recipes = mr.map((mealrecipe) => (
      mealrecipe.recipe
    ));

    const ingredients_data = recipes.map((recipe) => (
      recipe.ingredients
    ));
    let ingredients = [];
    for(let chunk of ingredients_data){
      for(let ingredient of chunk){
        ingredients.push(ingredient);
      }
    }
    //console.log("ingredients => ", ingredients);

    return {
      status: true,
      message: `DATE : ${data.date.toLocaleDateString()}`,
      mealrecipes: mr,
      recipes: recipes,
      ingredients: ingredients
    };
  }
}
