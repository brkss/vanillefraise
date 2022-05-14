import {
  Resolver,
  Query,
  Mutation,
  Arg,
  Ctx,
  UseMiddleware,
} from "type-graphql";
import { CookedRecipe } from "../../entity/UserInfo";
import { User } from "../../entity/User";
import { Recipe } from "../../entity/Recipe";
import { isUserAuth } from "../../utils/middlewares";
import { IContext } from "../../utils/types/Context";
import { DefaultResponse } from "../../utils/responses/default.response";
import { MealRecipes } from "../../entity/Meals/MealRecipes";
import { CookedRecipeInput } from "../../utils/inputs";
import { CookedRecipesResponse } from "../../utils/responses";

@Resolver()
export class CookedRecipeResolver {
  @UseMiddleware(isUserAuth)
  @Mutation(() => CookedRecipesResponse)
  async checkCookedMeal(
    @Arg("mealRecipesID", () => [String]) mealRecipesID: string[],
    @Ctx() ctx: IContext
  ): Promise<CookedRecipesResponse> {
    const user = await User.findOne({ where: { id: ctx.payload.userID } });
    if (!user || !mealRecipesID || mealRecipesID.length == 0) {
      return {
        status: false,
        message: "Invalid Data !",
      };
    }
    let count = 0;
    for (let mri of mealRecipesID) {
      let mr = await MealRecipes.findOne({ where: { id: mri } });
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

  @UseMiddleware(isUserAuth)
  @Mutation(() => CookedRecipesResponse)
  async cookedRecipe(
    @Arg("data") data: CookedRecipeInput,
    @Ctx() ctx: IContext
  ): Promise<CookedRecipesResponse> {
    if (!data.recipeId || !data.mealId) {
      return {
        status: false,
        message: "Invalid Recipe or Meal !",
      };
    }
    try {
      const user = await User.findOne({ where: { id: ctx.payload.userID } });
      const recipe = await Recipe.findOne({
        where: { id: data.recipeId },
        relations: ["recipe_total_nutrition"],
      });
      if (!user || !recipe) {
        return {
          status: false,
          message: "Invalid Recipe !",
        };
      }
      const cookedRecipe = new CookedRecipe();
      cookedRecipe.recipe = recipe;
      cookedRecipe.user = user;
      await cookedRecipe.save();
      const mealRecipe = await MealRecipes.findOne({
        where: { id: data.mealId },
      });
      if (!mealRecipe) {
        return {
          status: false,
          message: "Invalid Meal !",
        };
      }
      mealRecipe.cooked = true;
      await mealRecipe.save();
      return {
        status: true,
        message: "Recipe flaged as cooked !",
        calories:
          recipe.totalnutrition.find((x) => x.code == "ENERC_KCAL")?.quantity ||
          0,
      };
    } catch (e) {
      console.log(
        "Something went wrong trying to flag recipe as cooked => ",
        e
      );
      return {
        status: false,
        message: "Something went wrong !",
      };
    }
  }

  @UseMiddleware(isUserAuth)
  @Mutation(() => CookedRecipesResponse)
  async cookedRecipes(
    @Arg("mealRecipesID", () => [String]) mealRecipesID: string[],
    @Ctx() ctx: IContext
  ): Promise<CookedRecipesResponse> {
    if (!mealRecipesID || mealRecipesID.length == 0) {
      return {
        status: false,
        message: "Invalid Data !",
      };
    }

    const user = await User.findOne({ where: { id: ctx.payload.userID } });
    if (!user) {
      return {
        status: false,
        message: "Invalid User !",
      };
    }

    let cals = 0;
    for (let mealRecipeId of mealRecipesID) {
      const mr = await MealRecipes.findOne({
        where: { id: mealRecipeId },
        relations: ["recipe", "recipe.totalnutrition"],
      });
      if (mr && !mr.cooked) {
        const cr = new CookedRecipe();
        cr.recipe = mr.recipe;
        cr.user = user;
        cr.created_at = new Date(mr.date);
        mr.cooked = true;
        await mr.save();
        await cr.save();
        cals +=
          mr.recipe.totalnutrition.find((x) => x.label == "ENERC_KCAL")
            ?.quantity || 0;
      }
    }
    return {
      status: true,
      message: "Recipes Marked successfuly !",
      calories: cals,
    };
  }

  @UseMiddleware(isUserAuth)
  @Query(() => Number)
  async cookedRecipesCount(@Ctx() ctx: IContext): Promise<number> {
    const user = await User.findOne({ where: { id: ctx.payload.userID } });
    const count = await CookedRecipe.count({ where: { user: user } });
    return count;
  }
}
