import { ObjectType, Field } from 'type-graphql';


@ObjectType()
export class MealListResponse {

  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  index: number;

  @Field()
  count: number;

}
