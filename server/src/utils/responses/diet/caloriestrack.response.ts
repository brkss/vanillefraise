import { ObjectType, Field } from 'type-graphql';


@ObjectType()
export class CaloriesTrackResponse {
  
  @Field()
  value: number;

  @Field(() => Date)
  date: Date;
}
