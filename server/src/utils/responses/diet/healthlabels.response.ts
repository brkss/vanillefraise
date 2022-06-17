import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class DietHealthLabelResponse {
  @Field()
  id: string;

  @Field()
  label: string;

  @Field()
  description: string;

  @Field()
  count: number;

}
