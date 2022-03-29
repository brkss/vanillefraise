import { InputType, Field } from 'type-graphql';


@InputType()
export class AddMealRecipeInput {


  @Field()
  recipeID: string;

  @Field()
  mealID: string;

}
