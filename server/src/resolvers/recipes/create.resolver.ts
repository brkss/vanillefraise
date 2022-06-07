import { Resolver, Mutation, Arg } from "type-graphql";
import { downloadImage } from "../../utils/helpers/donwloadImage";
import {
  Recipe,
  Ingredient,
  Instruction,
  RecipeCategory,
} from "../../entity/Recipe";
import { CreateRecipeResponse } from "../../utils/responses";
import { CreateRecipeInput } from "../../utils/inputs/recipes/createrecipe.input";
import { recipeNutrition } from "../../utils/nutrition";
import {
  RecipeDietLabel,
  RecipeHealthLabel,
  RecipeTotalDaily,
  RecipeTotalNutrition,
  RecipeTotalNutritionKcal,
} from "../../entity/Nutrition";
import { parse } from "recipe-ingredient-parser-v2";
const recipeScraper = require("recipe-scraper");
import { scaleRecipe, fractionConverter } from "../../utils/helpers";

@Resolver()
export class CreateRecipeResolver {
  @Mutation(() => CreateRecipeResponse)
  async createRecipe(
    @Arg("data") data: CreateRecipeInput
  ): Promise<CreateRecipeResponse> {
    if (!data.url || data.categories.length == 0)
      return {
        message: "Invalid URl",
        status: false,
      };
    let recipe: Recipe | null = null;
    try {
      const uri = data.url;
      const recipeCheck = await Recipe.findOne({ where: { url: uri } });
      if (recipeCheck) {
        return {
          message: "Recipe already exsit",
          status: false,
        };
      }
      const recipe_data = await recipeScraper(uri);
      console.log("recipe data +++>> ", recipe_data);
      //return {
      //status: false,
      //message: "Testing !",
      //};
      const img = `${recipe_data.name
        .split(" ")
        .join("_")}_${new Date().getTime()}.jpg`;
      console.log("OPTIMIZE IMAGE !");
      await downloadImage(recipe_data.image, `../../cdn/images/${img}`);
      if (!recipe_data.servings) {
        return {
          status: false,
          message: "Invalid Recipe Servings ! ",
        };
      }
      recipe = new Recipe();
      recipe.name = recipe_data.name;
      recipe.image = img;
      recipe.description = recipe_data.description;
      recipe.prep = recipe_data.time.prep;
      recipe.cook = recipe_data.time.cook;
      recipe.serving = parseInt(recipe_data.servings);
      recipe.total = recipe_data.time.total;
      recipe.url = uri;
      const categories = await this.getRecipeCategories(data.categories);
      if (categories.length !== data.categories.length) {
        return {
          status: false,
          message: "Error : Category not found !",
        };
      }
      recipe.categories = categories;
      await recipe.save();
      await this.createRecipeIngredients(recipe, recipe_data.ingredients);
      await this.createRecipeInstructions(recipe, recipe_data.instructions);

      const r = await Recipe.findOne({
        where: { id: recipe.id },
        relations: ["ingredients"],
      });
      await this.createRecipeNutritionData(r!, {
        name: recipe_data.name,
        ingr: recipe_data.ingredients,
      });
      return {
        status: true,
        message: "Recipe created successfuly ! ",
        recipe: recipe,
      };
    } catch (e) {
      if (recipe) {
        await recipe.remove();
      }
      console.log("something went wrong : ", e);
      return {
        message: "Something went wrong ",
        status: false,
      };
    }
  }

  async getRecipeCategories(cats: string[]): Promise<RecipeCategory[]> {
    let categories: RecipeCategory[] = [];
    for (let cat_id of cats) {
      const category = await RecipeCategory.findOne({ where: { id: cat_id } });
      if (category) categories.push(category);
    }
    return categories;
  }

  async createRecipeIngredients(recipe: Recipe, ings: string[]) {
    for (let ing of ings) {
      if (ing.length > 0) {
        const ingredient_parsed = parse(ing);
        //const ingredient_parsed = parser.getIngredientsFromText([ing], false);
        const ingredient = new Ingredient();
        ingredient.raw = ing;
        ingredient.unit = ingredient_parsed.unit || undefined;
        ingredient.amount = ingredient_parsed.quantity?.toString();
        ingredient.ingredients = ingredient_parsed.ingredient;
        ingredient.recipe = recipe;
        await ingredient.save();
      }
    }
  }

  async createRecipeInstructions(recipe: Recipe, insts: string[]) {
    let index = 0;
    for (let inst of insts) {
      if (inst.length > 0) {
        const instruction = new Instruction();
        instruction.index = index + 1;
        instruction.recipe = recipe;
        instruction.raw = inst;
        index++;
        await instruction.save();
      }
    }
  }

  async createRecipeNutritionData(
    recipe: Recipe,
    data: { name: string; ingr: string[] }
  ) {
    const nutrition = await recipeNutrition({
      name: data.name,
      ingr: scaleRecipe(recipe.serving!, 1, recipe.ingredients).map((i) => {
        return `${
          parseFloat(i.amount || "0") <= 0
            ? ""
            : Math.floor(parseFloat(i.amount!)) == 0
            ? fractionConverter(parseFloat(i.amount!)) + " "
            : i.amount + " "
        }${i.unit ? i.unit + " " : ""}${i.ingredients}`;
      }),
    });

    console.log("nutrition : ", nutrition);

    if (!data) return;

    // recipe diet label
    for (let dlabel of nutrition.data.dietLabels) {
      const dietLabel = new RecipeDietLabel();
      dietLabel.label = dlabel;
      dietLabel.recipe = recipe;
      await dietLabel.save();
    }
    // recipe health label
    for (let hlabel of nutrition.data.healthLabels) {
      const healthLabel = new RecipeHealthLabel();
      healthLabel.label = hlabel;
      healthLabel.recipe = recipe;
      await healthLabel.save();
    }
    // recipe's total nutrition !
    const totalNutrientsData = nutrition.data.totalNutrients;
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
    const totalDailyData = nutrition.data.totalDaily;
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
    const totalNutrientKcalData = nutrition.data.totalNutrientsKCal;
    for (let tnutrKcal of Object.keys(totalNutrientKcalData)) {
      const totalNutritionKcal = new RecipeTotalNutritionKcal();
      totalNutritionKcal.recipe = recipe;
      totalNutritionKcal.label = totalNutrientKcalData[tnutrKcal].label;
      totalNutritionKcal.quantity = totalNutrientKcalData[tnutrKcal].quantity;
      totalNutritionKcal.unit = totalNutrientKcalData[tnutrKcal].unit;
      totalNutritionKcal.code = tnutrKcal;
      await totalNutritionKcal.save();
    }
  }
}
