import {Field, ObjectType} from 'type-graphql';

@ObjectType()
export class ActivityCaloriesResponse {

  @Field()
  status: boolean;

  @Field()
  high: number;

  @Field()
  low: number;

}
