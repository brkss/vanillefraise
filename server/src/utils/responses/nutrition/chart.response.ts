import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class NutritionIntakeChartResponse {
  @Field()
  date: string;

  @Field()
  intake: number;
}
