import { InputType, Field } from "type-graphql";

@InputType()
export class CreateSubscritionInput {
  @Field()
  priceID: string;

  @Field()
  paymentMethodID: string;
}
