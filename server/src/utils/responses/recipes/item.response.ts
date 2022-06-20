import { ObjectType, Field } from "type-graphql";
import { Recipe } from "../../../entity/Recipe";
import { Ingredient } from "../../../entity/Recipe/Ingredient";
import { Instruction } from "../../../entity/Recipe/Instuction";

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
export class TranslatedInstruction extends Instruction {
  @Field({nullable: true})
  es?: string;

  @Field({nullable: true})
  fr?: string;

  @Field({nullable: true})
  ar?: string; 
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

  @Field(() => [TranslatedInstruction], {nullable: true})
  instructions?: TranslatedInstruction[]; 

}
