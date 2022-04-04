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
import { MealRecipes } from '../../entity/Meals/MealRecipes';

@Resolver()
export class CookedRecipeResolver {
  
  @UseMiddleware(isUserAuth)
  @Mutation(() => DefaultResponse)
  async checkCookedMeal(@Arg('mealRecipesID', () => [String]) mealRecipesID: string[], @Ctx() ctx: IContext)  : Promise<DefaultResponse> {
    
    const user = await User.findOne({where: {id: ctx.payload.userID}})
    if(!user || !mealRecipesID || mealRecipesID.length == 0){
      return{
        status: false,
        message: "Invalid Data !"
      }
    }
    let count = 0;
    for(let mri of mealRecipesID){
      let mr = await MealRecipes.findOne({where: {id: mri}});
      if(!mr){
        return {
          status: false,
        }
      }
      if(mr.cooked)
        count++;
    }
    if(count == mealRecipesID.length)
      return {
        status: true
      }
    return {
        status: false
    }
  }

  @UseMiddleware(isUserAuth)
  @Mutation(() => DefaultResponse)
  async cookedRecipe(
    @Arg("recipeID") recipeID: string,
    @Ctx() ctx: IContext
  ): Promise<DefaultResponse> {
    if (!recipeID) {
      return {
        status: false,
        message: "Invalid Arguments !",
      };
    }

    try {
      const user = await User.findOne({ where: { id: ctx.payload.userID } });
      const recipe = await Recipe.findOne({ where: { id: recipeID } });
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

      return {
        status: true,
        message: "Recipe flaged as cooked !",
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
  @Mutation(() => DefaultResponse)
  async cookedRecipes(
    @Arg("mealRecipesID", () => [String]) mealRecipesID: string[],
    @Ctx() ctx: IContext
  ): Promise<DefaultResponse> {
    if (!mealRecipesID|| mealRecipesID.length == 0) {
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

    for (let mealRecipeId of mealRecipesID) {
      const mr = await MealRecipes.findOne({where: {id: mealRecipeId}, relations: ['recipe']});
      if(mr && !mr.cooked){
        const cr = new CookedRecipe();
        cr.recipe = mr.recipe;
        cr.user = cr.user;
        cr.created_at = new Date(mr.date);
        mr.cooked = true;
        await mr.save();
        await cr.save();
      }
    }

    return {
      status: true,
      message: "Recipes Marked successfuly !",
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
