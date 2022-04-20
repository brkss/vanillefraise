import { InputType, Field } from "type-graphql";

@InputType()
export class RemoveMealRecipeInput {
  @Field()
  mealid: string;

  @Field()
  recipeid: string;
}
