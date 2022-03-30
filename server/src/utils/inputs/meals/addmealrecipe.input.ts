import { InputType, Field } from 'type-graphql';


@InputType()
export class AddMealRecipeInput {


  @Field({nullable: true})
  date?: Date;

  @Field()
  recipeID: string;

  @Field()
  mealID: string;

}
