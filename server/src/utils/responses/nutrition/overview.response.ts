import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class NutritionOverviewResponse {
  @Field()
  status: boolean;

  @Field({ nullable: true })
  message?: string;

  @Field(() => [NutritionCategoryOverview], { nullable: true })
  data?: NutritionCategoryOverview[];
}

@ObjectType()
export class NutritionCategoryOverview {
  
  @Field()
  id: string;

  @Field()
  name: string;

  @Field(() => [NutritionOverviewData])
  nutritiens: NutritionOverviewData[];
}

@ObjectType()
export class NutritionOverviewData {
  @Field()
  name: string;

  @Field()
  code: string;

  @Field()
  quantity: number;

  @Field()
  unit: string;

  @Field()
  recomendation: number;
}
