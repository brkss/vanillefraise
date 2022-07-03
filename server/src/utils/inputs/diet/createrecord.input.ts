import { InputType, Field } from "type-graphql";

@InputType()
export class CreateDietRecordInput {
  @Field()
  value: number;

  @Field()
  unit: string;

  @Field()
  type: string;

  @Field()
  time: Date;

}
