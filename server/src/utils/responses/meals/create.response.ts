import { Field, ObjectType } from 'type-graphql';


@ObjectType()
export class CreateMealRecipeResponse {

  @Field()
  status: boolean;

  @Field()
  message?: string;

  @Field({nullable: true})
  mealId?: string;

}
