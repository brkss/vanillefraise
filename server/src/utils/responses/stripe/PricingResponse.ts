import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class PricingResponse {
  @Field(() => String)
  priceID: string;

  @Field(() => Number)
  amount: number;

  @Field(() => String)
  currency: string;

  @Field(() => String)
  productID: string;

  @Field(() => String)
  productName: string;
}
