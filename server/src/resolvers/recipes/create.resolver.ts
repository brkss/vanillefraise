import { Resolver, Mutation, Arg } from "type-graphql";
import RecipesParser from "recipes-parser";
const recipeScraper = require("recipe-scraper");
import * as path from "path";
import fs from "fs";
import { downloadImage } from "../../utils/helpers/donwloadImage";

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
      const recipe = await recipeScraper(uri);
      const parser = new RecipesParser(rules, units, globalUnit);
      await downloadImage(recipe.image, "../../cdn/images/img.jpg");
      const ingredients = parser.getIngredientsFromText(
        recipe.ingredients,
        false
      );
      //console.log("recipe => ", recipe);
      console.log("ingredients => ", ingredients);
    } catch (e) {
      console.log("something went wrong : ", e);
      return false;
    }
    return true;
  }
}
