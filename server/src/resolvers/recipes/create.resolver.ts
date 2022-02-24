import { Resolver, Mutation, Arg } from "type-graphql";
import RecipesParser from "recipes-parser";
const recipeScraper = require("recipe-scraper");
import * as path from "path";
import fs from "fs";
import { downloadImage } from "../../utils/helpers/donwloadImage";
import { Recipe, Ingredient, Instruction } from "../../entity/Recipe";
import { CreateRecipeResponse } from '../../utils/responses';

// config !
import units from "recipes-parser/lib/nlp/en/units.json";
import globalUnit from "recipes-parser/lib/nlp/en/global_unit.json";
const rules = fs.readFileSync(
  path.join(
    __dirname,
    `../../../node_modules/recipes-parser/lib/nlp/en/en/rules.pegjs`
  ),
  {
    encoding: "utf8",
  }
);

@Resolver()
export class CreateRecipeResolver {
  @Mutation(() => CreateRecipeResponse)
  async createRecipe(@Arg("uri") uri: string): Promise<CreateRecipeResponse> {
    if (!uri) return {
      message: "Invalid URl",
      status: false
    };
    try {
      const recipeCheck = await Recipe.findOne({where: {url: uri}});
      if(recipeCheck){
        return {
          message: "Recipe already exsit",
          status: false,
        };
      }
      const recipe_data = await recipeScraper(uri);
      const img = `${recipe_data.name.split(" ").join("_")}.jpg`;
      await downloadImage(recipe_data.image, `../../cdn/images/${img}`);
      const recipe = new Recipe();
      recipe.name = recipe_data.name;
      recipe.image = img;
      recipe.description = recipe_data.description;
      recipe.prep = recipe_data.time.prep;
      recipe.cook = recipe_data.time.cook;
      recipe.total = recipe_data.time.total;
      recipe.url = uri;
      await recipe.save();

      await this.createRecipeIngredients(recipe, recipe_data.ingredients);
      await this.createRecipeInstructions(recipe, recipe_data.instructions);
      /*
      const img = `../../cdn/images/${recipe_data.name.split(" ").join("_")}.jpg`;
      await downloadImage(recipe_data.image, img);
      console.log("recipe => ", recipe_data);
      //console.log("ingredients => ", ingredients);
      const recipe = new Recipe();
      recipe.name = recipe_data.name;
      recipe.description = recipe_data.description;
      */
    } catch (e) {
      console.log("something went wrong : ", e);
      return {
        message: "Something went wrong ",
        status: false
      };
    }
    return {
      status: true,
      message: "Recipe created successfuly ! "
    };
  }

  async createRecipeIngredients(recipe: Recipe, ings: string[]) {
    const parser = new RecipesParser(rules, units, globalUnit);
    for (let ing of ings) {
      const ingredient_parsed = parser.getIngredientsFromText([ing], false);
      const ingredient = new Ingredient();
      ingredient.raw = ing;
      ingredient.unit = String(ingredient_parsed[0].result?.unit) || undefined;
      ingredient.amount =
        Number(ingredient_parsed[0].result?.amount) || undefined;
      ingredient.ingredients = ingredient_parsed[0].result?.ingredient;
      ingredient.recipe = recipe;
      await ingredient.save();
      //console.log("ing parsed ===> ", ingredient_parsed);
      //console.log("ing raaaaw ===> ", ing);
    }
  }

  async createRecipeInstructions(recipe: Recipe, insts: string[]) {
    for (let inst of insts) {
      const instruction = new Instruction();
      instruction.recipe = recipe;
      instruction.raw = inst;
      await instruction.save();
    }
  }
}
