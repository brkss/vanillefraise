import { Resolver, Query, UseMiddleware, Ctx } from 'type-graphql';
import { User } from '../../entity/User';
import { CookedRecipe } from '../../entity/UserInfo/CookedRecipe';
import { Recipe } from '../../entity/Recipe';
import { Nutrition, RecipeTotalNutrition } from '../../entity/Nutrition';
import { isUserAuth } from '../../utils/middlewares';
import {IContext} from '../../utils/types/Context';
import { NutritionOverviewResponse } from '../../utils/responses/nutrition'

@Resolver()
export class NutritionOverviewResolver {

  @UseMiddleware(isUserAuth)
  @Query(() => NutritionOverviewResponse)
  async userNutrition(@Ctx() ctx: IContext) : Promise<NutritionOverviewResponse> {
  
    const user = await User.findOne({where: {id: ctx.payload.userID}});
    if(!user){
      return {
        status: false,
        message: "Invalid User !"
      }
    }
    const nutrients = await Nutrition.find();
    const recipesNutrition : RecipeTotalNutrition[] = [];
    const cookedRecipes = await CookedRecipe.find({where: {user: user}, relations: ['recipe']});
    for(let cooked of cookedRecipes){
      const nutrition = await RecipeTotalNutrition.find({where: {recipe: cooked.recipe}});
      recipesNutrition.push(...nutrition);
    }

    const results = nutrients.map((n) => {
      let quantity = 0;
      for(let rn of recipesNutrition){
        if(rn.code == n.code)
          quantity += rn.quantity;
      }
      return {
        name: n.name,
        code: n.code,
        quantity: quantity 
      }
    });

    return {
      status: true,
      data: results
    }


  } 


}
