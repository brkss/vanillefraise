import { Resolver, Query, Arg } from "type-graphql";
import { Recipe } from "../../entity/Recipe";
import {
  RecipeItemResponse,
  TranslatedIngredient,
} from "../../utils/responses/recipes";
import {} from "../../utils/data/translate/refrence";
import { Translated } from "../../entity/Translate/Translated";
import { translated_text_refrence as ref } from "../../utils/data/translate/refrence";
import { BaseEntity } from "typeorm";

@Resolver()
export class RecipeItemResolver {
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
      relations: ["instructions", "ingredients"],
    });
    if (!recipe)
      return {
        status: false,
        message: "Recipe Not Found !",
      };
    const ingredients: TranslatedIngredient[] = [];
    for (let ing of recipe?.ingredients) {
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
    };
  }
}
