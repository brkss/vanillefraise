import { InputType, Field } from "type-graphql";

@InputType()
export class CreateActivityInput {
  @Field()
  category: string;

  @Field()
  duration: string;

  @Field({ nullable: true })
  feedback?: string;

  @Field({ nullable: true })
  calories?: number;
}
