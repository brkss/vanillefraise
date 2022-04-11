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
import { DefaultResponse } from "src/utils/responses";

@Resolver()
export class ListMealsResolver {
  @UseMiddleware(isUserAuth)
  @Query(() => [Meal])
  async meals(@Ctx() ctx: IContext): Promise<Meal[]> {
    const user = await User.findOne({where: {id: ctx.payload.userID}});
    if(!user)
      return [];
    // filter by date and get meals recipes count and calory count ! 
    const meals = await Meal.find();
    return meals;
  }

  @UseMiddleware(isUserAuth)
  @Query(() => MarkedDaysResponse)
  async daysWithRecipes(
    @Arg("mealID") mealID: string,
    @Ctx() ctx: IContext
  ): Promise<MarkedDaysResponse> {
    const user = await User.findOne({ where: { id: ctx.payload.userID } });
    if (!user || !mealID) {
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
      .andWhere("meal_recipes.mealId = :mealID", { mealID: mealID })
      .groupBy("meal_recipes.date")
      .getRawMany();
    console.log("USER ID : ", user.id);

    return {
      status: true,
      markedDates: mr,
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
      relations: ["recipe", "recipe.ingredients", "recipe.totalnutrition"],
    });

    const mri = mr.map((mealrecipe) => mealrecipe.id);
    const recipes = mr.map((mealrecipe) => mealrecipe.recipe);
    // count total time in minutes
    let cal = 0;
    let total = 0;
    for (let recipe of recipes) {
      cal =
        recipe.totalnutrition.find((x) => x.code == "ENERC_KCAL")?.quantity ||
        0;
      total += parseInt(recipe.total || "0") || 0;
    }

    const ingredients_data = recipes.map((recipe) => recipe.ingredients);
    let ingredients = [];
    for (let chunk of ingredients_data) {
      for (let ingredient of chunk) {
        ingredients.push(ingredient);
      }
    }
    //console.log("ingredients => ", ingredients);

    const cooked = await this.checkIfCooked(user, mri);
    return {
      status: true,
      message: `DATE : ${data.date.toLocaleDateString()}`,
      mealrecipes: mr,
      recipes: recipes,
      ingredients: ingredients,
      time: total,
      calories: cal,
      cooked: cooked.status,
    };
  }

  async checkIfCooked(
    user: User,
    mealRecipesID: string[]
  ): Promise<DefaultResponse> {
    if (!user || !mealRecipesID || mealRecipesID.length == 0) {
      return {
        status: false,
        message: "Invalid Data !",
      };
    }
    let count = 0;
    for (let mri of mealRecipesID) {
      let mr = await MealRecipes.findOne({ where: { id: mri, user: user } });
      if (!mr) {
        return {
          status: false,
        };
      }
      if (mr.cooked) count++;
    }
    if (count == mealRecipesID.length)
      return {
        status: true,
      };
    return {
      status: false,
    };
  }
}
