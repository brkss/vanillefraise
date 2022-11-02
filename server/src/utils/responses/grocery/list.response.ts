import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class GroceryListResponse {
  @Field()
  name: string;

  @Field()
  quantity: number;

  @Field()
  unit: string;

  @Field()
  id: string;
}
