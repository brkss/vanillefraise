import { ObjectType, Field } from 'type-graphql';


@ObjectType()
export class NutritionOverviewResponse {
  
  @Field()
  status: boolean;

  @Field({nullable: true})
  message?: string;

  @Field(() => [NutritionOverviewData], {nullable: true})
  data?: NutritionOverviewData[];

}

@ObjectType()
class NutritionOverviewData {
  @Field()
  name: string;

  @Field()
  code: string;

  @Field()
  quantity: number;
}
