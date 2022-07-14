import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class ActivityDataResponse {
  @Field()
  date: Date;

  @Field()
  count: number;
}
