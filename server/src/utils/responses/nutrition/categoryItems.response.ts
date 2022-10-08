import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class NutritionCategoryItemsResponse {
  @Field()
  code: string;

  @Field()
  recommended: number;

  @Field()
  intake: number;

  @Field()
  unit: string;
  
  @Field()
  name: string;
}
