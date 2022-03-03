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
  @Field(() => [RecipeDietLabel])
  dietLabels: RecipeDietLabel[];

  @Field(() => [RecipeHealthLabel])
  healthLabels: RecipeHealthLabel[];

  @Field(() => [RecipeTotalDaily])
  totalDaily: RecipeTotalDaily[];

  @Field(() => RecipeTotalNutrition)
  totalNutrition: RecipeTotalNutrition[];

  @Field(() => [RecipeTotalNutritionKcal])
  totalNutritionKcal: RecipeTotalNutritionKcal[]

}
