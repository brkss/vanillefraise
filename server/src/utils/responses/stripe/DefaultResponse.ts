import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class StripeDefaultResponse {
  @Field()
  status: boolean;

  @Field()
  message: string;
}
