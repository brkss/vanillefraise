import { Resolver, Query, Arg } from "type-graphql";
import { Ingredient, Instruction, Recipe } from "../../entity/Recipe";
import {
  RecipeItemResponse,
  TranslatedIngredient,
  TranslatedInstruction,
} from "../../utils/responses/recipes";
import {} from "../../utils/data/translate/refrence";
import { Translated } from "../../entity/Translate/Translated";
import { translated_text_refrence as ref } from "../../utils/data/translate/refrence";

@Resolver()
export class RecipeItemResolver {
  async setTranslatedIngredients(
    ings: Ingredient[]
  ): Promise<TranslatedIngredient[]> {
    const ingredients: TranslatedIngredient[] = [];
    for (let ing of ings) {
      const ti = await Translated.find({ where: { pointer: ing.id } });
      ingredients.push({
        ...ing,

        es: {
          unit: ti.find(
            (x) => x.type === ref.ingredient_unit && x.lang === "es"
          )?.txt,
          ingredient: ti.find(
            (x) => x.type === ref.ingredient_txt && x.lang === "es"
          )?.txt,
        },
        fr: {
          unit: ti.find(
            (x) => x.type === ref.ingredient_unit && x.lang === "fr"
          )?.txt,
          ingredient: ti.find(
            (x) => x.type === ref.ingredient_txt && x.lang === "fr"
          )?.txt,
        },
        ar: {
          unit: ti.find(
            (x) => x.type === ref.ingredient_unit && x.lang === "ar"
          )?.txt,
          ingredient: ti.find(
            (x) => x.type === ref.ingredient_txt && x.lang === "ar"
          )?.txt,
        },
      } as any);
    }
    return ingredients;
  }

  async setTranslatedInstructions(
    insts: Instruction[]
  ): Promise<TranslatedInstruction[]> {
    const instructions: TranslatedInstruction[] = [];

    for (let inst of insts) {
      const ti = await Translated.find({
        where: { pointer: inst.id, type: ref.instruction },
      });
      instructions.push({
        ...inst,
        ar: ti.find((x) => x.lang === "ar")?.txt,
        es: ti.find((x) => x.lang === "es")?.txt,
        fr: ti.find((x) => x.lang === "fr")?.txt,
      } as any);
    }
    return instructions;
  }

  @Query(() => RecipeItemResponse)
  async recipe(@Arg("id") id: string): Promise<RecipeItemResponse> {
    if (!id) {
      return {
        status: false,
        message: "Invalid data !",
      };
    }
    const recipe = await Recipe.findOne({
      where: { id: id },
      relations: ["instructions", "ingredients", "healthlabel"],
    });
    if (!recipe)
      return {
        status: false,
        message: "Recipe Not Found !",
      };
    const ingredients = await this.setTranslatedIngredients(recipe.ingredients);
    const instructions = await this.setTranslatedInstructions(
      recipe.instructions
    );
    if (!recipe) {
      return {
        status: false,
        message: "Recipe Not Found !",
      };
    }
    return {
      status: true,
      recipe: recipe,
      ingredients: ingredients,
      instructions: instructions,
    };
  }
}
