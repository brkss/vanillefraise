import { ObjectType, Field } from "type-graphql";

@ObjectType()
class NutritionCategoryData {
  @Field()
  name: string;

  @Field()
  intake: number;

  @Field()
  id: string;
}

@ObjectType()
export class DailyNutritionIntakeResponse {
  @Field(() => [NutritionCategoryData])
  categories: NutritionCategoryData[];
}
