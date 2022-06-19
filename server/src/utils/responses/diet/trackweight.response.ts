import { ObjectType, Field } from 'type-graphql';


@ObjectType()
export class TrackWeightResponse {

  @Field()
  value: number;

  @Field()
  date: Date;

}
