import { isUserAuth } from "../../utils/middlewares";
import { IContext } from "../../utils/types/Context";
import { Resolver, Query, Arg, UseMiddleware, Ctx } from "type-graphql";
import { Meal, MealRecipes } from "../../entity/Meals";
import { MealRecipesInput } from "../../utils/inputs/meals";
import {
  MealRecipeResponse,
  MarkedDaysResponse,
} from "../../utils/responses/meals";
import { User } from "../../entity/User";
import { Like, getRepository } from "typeorm";

@Resolver()
export class ListMealsResolver {
  @Query(() => [Meal])
  async meals(): Promise<Meal[]> {
    const meals = await Meal.find();
    return meals;
  }

  @UseMiddleware(isUserAuth)
  @Query(() => MealRecipeResponse)
  async mr(
    @Arg("data") data: MealRecipesInput,
    @Ctx() ctx: IContext
  ): Promise<MealRecipeResponse> {
    const user = await User.findOne({ where: { id: ctx.payload.userID } });
    if (!data || !data.date || !data.meal || !user)
      return {
        status: false,
        message: "Invalid Data !",
      };
    return {
      status: true,
      message: "Test !",
    };
  }

  @UseMiddleware(isUserAuth)
  @Query(() => MarkedDaysResponse)
  async daysWithRecipes(@Ctx() ctx: IContext): Promise<MarkedDaysResponse> {
    const user = await User.findOne({ where: { id: ctx.payload.userID } });
    if (!user) {
      return {
        status: false,
        message: "Invalid Data !",
      };
    }
    const mr = await getRepository(MealRecipes)
      .createQueryBuilder("meal_recipes")
      .select("meal_recipes.date", "date")
      .addSelect("COUNT(meal_recipes.id)", "count")
      .where("meal_recipes.userId = :userID", { userID: user.id })
      .groupBy("meal_recipes.date")
      .getRawMany();

    console.log("Results : ", mr);

    return {
      status: true,
      markedDates: mr
    };
  }

  @UseMiddleware(isUserAuth)
  @Query(() => MealRecipeResponse)
  async getMealRecipes(
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
        user: user,
        meal: meal,
        date: Like(`%${data.date.toLocaleDateString()}%`),
      },
      relations: ["recipe", "recipe.ingredients"],
    });

    const recipes = mr.map((mealrecipe) => mealrecipe.recipe);

    const ingredients_data = recipes.map((recipe) => recipe.ingredients);
    let ingredients = [];
    for (let chunk of ingredients_data) {
      for (let ingredient of chunk) {
        ingredients.push(ingredient);
      }
    }
    //console.log("ingredients => ", ingredients);

    return {
      status: true,
      message: `DATE : ${data.date.toLocaleDateString()}`,
      mealrecipes: mr,
      recipes: recipes,
      ingredients: ingredients,
    };
  }
}
