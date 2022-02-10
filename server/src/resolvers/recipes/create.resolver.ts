import { Resolver, Mutation, Arg } from "type-graphql";
import RecipesParser from "recipes-parser";
const recipeScraper = require("recipe-scraper");
import * as path from "path";
import fs from "fs";
import { downloadImage } from "../../utils/helpers/donwloadImage";
import { Recipe, Ingredient, Instruction } from "../../entity/Recipe";

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
  @Mutation(() => Boolean)
  async createRecipe(@Arg("uri") uri: string): Promise<boolean> {
    if (!uri) return false;
    try {
      const recipe_data = await recipeScraper(uri);
      await this.createRecipeIngredients(recipe_data.ingredients);
      const recipe = new Recipe();
      recipe.name = recipe_data.name;
      recipe.description = recipe_data.description;
      recipe.prep = recipe_data.time.prep;
      recipe.cook = recipe_data.time.cook;
      recipe.total = recipe_data.time.total;
      await recipe.save();
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
      return false;
    }
    return true;
  }

  async createRecipeIngredients(ings: string[]) {
    const parser = new RecipesParser(rules, units, globalUnit);
    for (let ing of ings) {
      const ingredient_parsed = parser.getIngredientsFromText([ing], false);
      console.log("ing parsed ===> ", ingredient_parsed);
      console.log("ing raaaaw ===> ", ing);
    }
  }
}
