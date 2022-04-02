import { ObjectType, Field } from "type-graphql";
import { Recipe, Ingredient } from '../../../entity/Recipe';
import { RecipeTotalNutrition } from '../../../entity/Nutrition';

@ObjectType()
export class SearchResultResponse {

  @Field(() => [Recipe])
  recipes: Recipe[];

  @Field(() => [Ingredient])
  ingredients: Ingredient[];

  @Field(() => [RecipeTotalNutrition])
  nutritients: RecipeTotalNutrition[];


}
