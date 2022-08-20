import {
  Recipe,
  Ingredient,
  Instruction,
  RecipeCategory,
} from "../../../entity/Recipe";
import {
  Nutrition,
  HealthLabelRefrence,
  RecipeDietLabel,
  RecipeHealthLabel,
  RecipeTotalDaily,
  RecipeTotalNutrition,
  RecipeTotalNutritionKcal,
} from "../../../entity/Nutrition";
import { get_recipe } from "./index";
import { downloadImage } from "../donwloadImage";
import { IIngredient } from ".";

export const create_recipe = async (url: string, cats: string[]) => {
  const data = await get_recipe(url);
  if (!data) return null;
  const categories = await get_categories(cats);
  if (categories.length === 0) return null;
  if (await Recipe.findOne({ where: { url: url } })) return null;
  const recipe = new Recipe();
  recipe.name = data.title;
  recipe.total = data.time.toString();
  recipe.categories = categories;
  recipe.url = url;
  recipe.description = "none";
  recipe.image = await download_recipe_image(data.image, data.title);
  recipe.serving = 0;
  await recipe.save();
  await create_recipe_ingredients(recipe, data.ingredients);
  await create_recipe_instructions(recipe, data.instructions);
};

const create_recipe_instructions = async (
  recipe: Recipe,
  instructions: string[]
): Promise<boolean> => {
  for (let instruction of instructions) {
    const inst = new Instruction();
    inst.recipe = recipe;
    inst.raw = instruction;
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
