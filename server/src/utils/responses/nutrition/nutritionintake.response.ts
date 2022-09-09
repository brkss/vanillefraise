import { ObjectType, Field } from "type-graphql";

@ObjectType()
class NutritionIntakeItem {
  @Field()
  quantity: number;

  @Field()
  date: Date;
}

@ObjectType()
export class NutritionIntakeResponse {
  @Field(() => [NutritionIntakeItem])
  data: NutritionIntakeItem[];
}
