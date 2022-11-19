import { ObjectType, Field } from "type-graphql";
import { NutritienCategory, Nutrition } from "../../../entity/Nutrition";

@ObjectType()
export class NewPlanNutritionResponse {
  @Field()
  category: NutritienCategory;

  @Field(() => [Item])
  items: Item[];
}

@ObjectType()
class Item {
  @Field()
  nutrition: Nutrition;

  @Field()
  recommendation: number;
}
