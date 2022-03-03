import { ObjectType, Field } from "type-graphql";
import {
  RecipeDietLabel,
  RecipeHealthLabel,
  RecipeTotalDaily,
  RecipeTotalNutrition,
  RecipeTotalNutritionKcal,
} from "../../../entity/Nutrition";

@ObjectType()
export class RecipeNutritionResponse {
  @Field(() => [RecipeDietLabel], {nullable: true})
  dietLabels?: RecipeDietLabel[];

  @Field(() => [RecipeHealthLabel], {nullable: true})
  healthLabels?: RecipeHealthLabel[];

  @Field(() => [RecipeTotalDaily], {nullable: true})
  totalDaily: RecipeTotalDaily[];

  @Field(() => RecipeTotalNutrition, {nullable: true})
  totalNutrition?: RecipeTotalNutrition[];

  @Field(() => [RecipeTotalNutritionKcal], {nullable: true})
  totalNutritionKcal?: RecipeTotalNutritionKcal[]

}
