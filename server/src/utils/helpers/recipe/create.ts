import {
  Recipe,
  Ingredient,
  Instruction,
  RecipeCategory,
} from "../../../entity/Recipe";
import {
  //Nutrition,
  //HealthLabelRefrence,
  RecipeDietLabel,
  RecipeHealthLabel,
  RecipeTotalDaily,
  RecipeTotalNutrition,
  RecipeTotalNutritionKcal,
} from "../../../entity/Nutrition";
import { get_recipe } from "./index";
import { downloadImage } from "../donwloadImage";
import { IIngredient } from ".";

interface ICreateRecipeResponse {
  success: boolean;
  message?: string;
  recipe?: Recipe;
}

export const create_recipe = async (
  url: string,
  cats: string[]
): Promise<ICreateRecipeResponse> => {
  const data = await get_recipe(url);
  if (!data)
    return {
      success: false,
      message: "Invalid Data !",
    };
  const categories = await get_categories(cats);
  if (categories.length === 0)
    return {
      success: false,
      message: "invalid category",
    };
  if (await Recipe.findOne({ where: { url: url } }))
    return {
      success: false,
      message: "recipe already exist !",
    };
  const recipe = new Recipe();
  recipe.name = data.title;
  recipe.total = data.time.toString();
  recipe.categories = categories;
  recipe.url = url;
  recipe.description = "none";
  recipe.image = await download_recipe_image(data.image, data.title);
  recipe.serving = data.nutrition.yield;
  await recipe.save();
  await create_recipe_ingredients(recipe, data.ingredients);
  await create_recipe_instructions(recipe, data.instructions);
  await create_recipe_nutrition(recipe, data.nutrition);
  return {
    success: true,
    recipe: recipe,
  };
};

const create_recipe_instructions = async (
  recipe: Recipe,
  instructions: string[]
): Promise<boolean> => {
  let index = 1;
  for (let instruction of instructions) {
    const inst = new Instruction();
    inst.recipe = recipe;
    inst.raw = instruction;
    inst.index = index;
    index++;
    await inst.save();
  }
  return true;
};

const create_recipe_ingredients = async (
  recipe: Recipe,
  ingredients: IIngredient[]
): Promise<boolean> => {
  for (let ingredient of ingredients) {
    const ing = new Ingredient();
    ing.recipe = recipe;
    ing.raw = ingredient.raw;
    ing.unit = ingredient.unit;
    ing.amount = ingredient.quantity;
    ing.ingredients = ingredient.name;
    await ing.save();
  }
  return true;
};

const get_categories = async (ids: string[]): Promise<RecipeCategory[]> => {
  const categories: RecipeCategory[] = [];
  for (let id of ids) {
    const category = await RecipeCategory.findOne({ where: { id: id } });
    if (!category) return [];
    categories.push(category);
  }
  return categories;
};

const download_recipe_image = async (
  img_url: string,
  title: string
): Promise<string> => {
  const img = `${title.split(" ").join("_")}_${new Date().getTime()}.jpg`;
  await downloadImage(img_url, `../../cdn/images/${img}`);
  return img;
};

const create_recipe_nutrition = async (
  recipe: Recipe,
  nutrition: any
): Promise<boolean> => {
  // create recipe's diet labels
  for (let label in nutrition.dietLabels) {
    const dietLabel = new RecipeDietLabel();
    dietLabel.label = label;
    dietLabel.recipe = recipe;
    await dietLabel.save();
  }
  // create recipe's healthlabels
  for (let hl of nutrition.healthLabels) {
    const healthLabel = new RecipeHealthLabel();
    healthLabel.label = hl;
    healthLabel.recipe = recipe;
    await healthLabel.save();
  }

  // recipe's total nutrition !
  const totalNutrientsData = nutrition.totalNutrients;
  for (let tnutrition of Object.keys(totalNutrientsData)) {
    const totalNutrients = new RecipeTotalNutrition();
    totalNutrients.recipe = recipe;
    totalNutrients.label = totalNutrientsData[tnutrition].label;
    totalNutrients.quantity = totalNutrientsData[tnutrition].quantity;
    totalNutrients.unit = totalNutrientsData[tnutrition].unit;
    totalNutrients.code = tnutrition;
    await totalNutrients.save();
  }
  // recipe's total daily
  const totalDailyData = nutrition.totalDaily;
  for (let tdaily of Object.keys(totalDailyData)) {
    const totalDaily = new RecipeTotalDaily();
    totalDaily.recipe = recipe;
    totalDaily.label = totalDailyData[tdaily].label;
    totalDaily.quantity = totalDailyData[tdaily].quantity;
    totalDaily.unit = totalDailyData[tdaily].unit;
    totalDaily.code = tdaily;
    await totalDaily.save();
  }
  // recipe's total daily
  const totalNutrientKcalData = nutrition.totalNutrientsKCal;
  for (let tnutrKcal of Object.keys(totalNutrientKcalData)) {
    const totalNutritionKcal = new RecipeTotalNutritionKcal();
    totalNutritionKcal.recipe = recipe;
    totalNutritionKcal.label = totalNutrientKcalData[tnutrKcal].label;
    totalNutritionKcal.quantity = totalNutrientKcalData[tnutrKcal].quantity;
    totalNutritionKcal.unit = totalNutrientKcalData[tnutrKcal].unit;
    totalNutritionKcal.code = tnutrKcal;
    await totalNutritionKcal.save();
  }

  return true;
};
