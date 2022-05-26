import { ObjectType, Field } from 'type-graphql';
import { RecipeTotalNutrition } from '../../../entity/Nutrition/TotalNutrition';

@ObjectType()
export class MealNutritionResponse {

  @Field()
  status: boolean;

  @Field({nullable: true})
  message?: string;

  @Field(() => [RecipeTotalNutrition], {nullable: true})
  nutrition?: RecipeTotalNutrition[] 

}
