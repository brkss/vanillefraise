import { Ingredient, Recipe } from "../../../entity/Recipe";
import { get_recipe } from '../../helpers/recipe'

export const fix_recipe_ingredients = async () : Promise<boolean> => {

  const recipes = await Recipe.find({relations: ['ingredients']});
  if(recipes.length === 0)  return false;


  for(let recipe of recipes){
    const data = await get_recipe(recipe.url); 
    if(!data) continue;
    const tmp_ingredients = [...recipe.ingredients];
    recipe.ingredients = [];
    await recipe.save();
  

    for(let ing of data.nutrition.ingredients){
      const ingredient = new Ingredient();
      ingredient.raw = ing.text;
      ingredient.amount = ing.quantity;
      ingredient.unit = ing.measure;
      ingredient.ingredients = ing.foodMatch;
      ingredient.recipe = recipe;
      await ingredient.save();
    }
  }

  return true;
};
