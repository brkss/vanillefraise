import { Resolver, Mutation, Arg } from 'type-graphql';
import { RecipeNutritionResponse } from '../../utils/responses/nutrition';
import { RecipeDietLabel, RecipeHealthLabel, RecipeTotalDaily, RecipeTotalNutrition, RecipeTotalNutritionKcal } from '../../entity/Nutrition';
import { Recipe } from '../../entity/Recipe';

@Resolver()
export class RecipeNutritionResolver {
  
  @Mutation(() => RecipeNutritionResponse)
  async getRecipeNutrition(@Arg('recipe_id') recipe_id: string) : Promise<RecipeNutritionResponse>{

    const res :RecipeNutritionResponse = {
      dietLabels: [],
      healthLabels: [],
      totalhDaily: [],
      totalNutrition: [],
      totalNutritionKcal:[]
    }

    const recipe = await Recipe.findOne({where: {id: recipe_id}});
    if(!recipe)
      return res;

    res.dietLabels = await RecipeDietLabel.find({where: {recipe: recipe}});
    res.healthLabels = await RecipeHealthLabel.find({where: {recipe: recipe}});
    res.totalhDaily = await RecipeTotalDaily.find({where: {id: recipe_id}});
    res.totalNutrition = await RecipeTotalNutrition.find({where: {id: recipe_id}});
    res.totalNutritionKcal = await RecipeTotalNutritionKcal.find({where: {recipe: recipe_id}});

    return res;

  }
}
