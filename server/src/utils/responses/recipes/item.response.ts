import { ObjectType, Field } from "type-graphql";
import { Recipe } from "../../../entity/Recipe";
import { Ingredient } from "../../../entity/Recipe/Ingredient";

@ObjectType()
class IngredientLang {
  @Field({ nullable: true })
  unit?: string;

  @Field({ nullable: true })
  ingredient?: string;
}

@ObjectType()
export class TranslatedIngredient extends Ingredient {
  @Field(() => IngredientLang)
  es?: IngredientLang;

  @Field(() => IngredientLang)
  ar?: IngredientLang;

  @Field(() => IngredientLang)
  fr?: IngredientLang;
}

@ObjectType()
export class RecipeItemResponse {
  @Field()
  status: boolean;

  @Field({ nullable: true })
  message?: string;

  @Field({ nullable: true })
  recipe?: Recipe;

  @Field(() => [TranslatedIngredient], { nullable: true })
  ingredients?: TranslatedIngredient[];
}
