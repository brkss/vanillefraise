import { InputType, Field } from 'type-graphql';


@InputType()
export class CookedRecipeInput {

  @Field()
  recipeId: string;

  @Field()
  mealId: string;

}
