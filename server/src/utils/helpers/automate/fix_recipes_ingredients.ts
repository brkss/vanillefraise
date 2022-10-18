import { Ingredient, Recipe } from "../../../entity/Recipe";
import { get_recipe } from "../../helpers/recipe";

const sanitize_recipe = async (recipe: Recipe) => {
  console.log(`[${recipe.name}] \t START`);
  let failed = false;
  const data = await get_recipe(recipe.url).catch((_) => {
    failed = true;
  });
  console.log(`[${recipe.name}] \t GOT THE DATA`);
  if (!data || failed) {
    console.log(`[${recipe.name}] : FAILED 📛`);
    return -1;
  }
  if (data.nutrition.error) {
    return -1;
  }
  //const tmp_ingredients = [...recipe.ingredients];
  recipe.ingredients = [];
  await recipe.save();
  if (recipe)
    for (let ing of data.nutrition.ingredients) {
      const ingredient = new Ingredient();
      ingredient.raw = ing.text;
      ingredient.amount = ing.parsed[0].quantity;
      ingredient.unit = ing.parsed[0].measure;
      ingredient.ingredients = ing.parsed[0].foodMatch;
      ingredient.recipe = recipe;
      await ingredient.save();
    }
  console.log(`[${recipe.name}] : ✅ DONE`);
  console.log(`-- -- -- -- -- -- -- -- -- -- -- -- -- --`);
  return 1;
};

export const fix_recipe_ingredients = async (): Promise<boolean> => {
  const recipes = await Recipe.find({ relations: ["ingredients"] });
  if (recipes.length === 0) return false;

  const recipes_promises = [];

  for (let recipe of recipes) {
    recipes_promises.push(sanitize_recipe(recipe));
  }

  await Promise.all(recipes_promises).then((values) => {
    console.log("promices results : ", values);
  });

  return true;
};
