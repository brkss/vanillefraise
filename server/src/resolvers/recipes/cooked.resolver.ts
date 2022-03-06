import { Resolver, Mutation, Arg, Ctx, UseMiddleware } from 'type-graphql';
import { CookedRecipe } from '../../entity/UserInfo';
import { User } from '../../entity/User';
import { Recipe } from '../../entity/Recipe';
import { isUserAuth } from '../../utils/middlewares';
import {IContext} from '../../utils/types/Context';
import { DefaultResponse } from '../../utils/responses/default.response';

@Resolver()
export class CookedRecipeResolver {

  @UseMiddleware(isUserAuth)
  @Mutation(() => DefaultResponse)
  async cookedRecipe(@Arg('recipeID') recipeID: string, @Ctx() ctx: IContext) : Promise<DefaultResponse>{
  
    if(!recipeID){
      return {
        status: false,
        message: "Invalid Arguments !"
      }
    }

    try {
      const user = await User.findOne({where: {id: ctx.payload.userID}});
      const recipe = await Recipe.findOne({where: {id: recipeID}});
      if(!user || !recipe){
        return {
          status: false,
          message: "Invalid Recipe !"
        }
      }
      const cookedRecipe = new CookedRecipe();
      cookedRecipe.recipe = recipe;
      cookedRecipe.user = user;
      await cookedRecipe.save(); 

      return {
        status: true,
        message: "Recipe flaged as cooked !"
      }
    }catch(e){
      console.log("Something went wrong trying to flag recipe as cooked => ", e);
      return {
        status: false,
        message: "Something went wrong !"
      }
    }
    
  }

} 
