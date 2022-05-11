import { DefaultResponse } from "../../utils/responses";
import { Resolver, Mutation, Arg, UseMiddleware, Ctx } from "type-graphql";
import { Meal, MealRecipes } from "../../entity/Meals";
import { AddMealRecipeInput } from "../../utils/inputs/meals";
import { Recipe } from "../../entity/Recipe";
import { isUserAuth } from "../../utils/middlewares";
import { User } from "../../entity/User";
import { IContext } from "../../utils/types/Context";
import { CreateMealRecipeResponse } from "../../utils/responses";

const meals_data = [
  {
    name: "Breakfast",
    index: 1,
  },
  {
    name: "Lunch",
    index: 2,
  },
  {
    name: "Dinner",
    index: 3,
  },
];

@Resolver()
export class CreateMealsResolver {
  @Mutation(() => Boolean)
  async seedMeals(): Promise<boolean> {
    const meals = await Meal.find();
    if (meals.length == 0) {
      for (let m of meals_data) {
        const meal = new Meal();
        meal.name = m.name;
        meal.index = m.index;
        await meal.save();
      }
      return true;
    }
    return false;
  }

  @UseMiddleware(isUserAuth)
  @Mutation(() => CreateMealRecipeResponse)
  async addMealRecipe(
    @Arg("data") data: AddMealRecipeInput,
    @Ctx() ctx: IContext
  ): Promise<CreateMealRecipeResponse> {
    if (!data || !data.mealID || !data.recipeID) {
      return {
        status: false,
        message: "Invalid Data !",
      };
    }

    const meal = await Meal.findOne({ where: { id: data.mealID } });
    const recipe = await Recipe.findOne({ where: { id: data.recipeID } });
    const user = await User.findOne({
      id: ctx.payload.userID,
    });
    if (!meal || !recipe || !user) {
      return {
        status: false,
        message: "Something went wrong : invalid Meal or Recipe",
      };
    }

    try {
      const mr = new MealRecipes();
      mr.recipe = recipe;
      mr.meal = meal;
      mr.date =
        data.date?.toLocaleDateString() || new Date().toLocaleDateString();
      mr.user = user;
      await mr.save();
      return {
        status: true,
        message: `Recipe add successfuly to ${meal.name}`,
        mealId: mr.id,
      };
    } catch (e) {
      console.log("Something went wrong !", e);
      return {
        status: false,
        message: "Something went wrong !",
      };
    }
  }
}
