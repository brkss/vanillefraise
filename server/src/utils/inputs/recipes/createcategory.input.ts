import { InputType, Field } from "type-graphql";

@InputType()
export class CreateRecipeCategoryInput {
  @Field()
  icon: string;

  @Field()
  name: string;
}
