import { Activity } from '../../../entity/Activity';
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class CreateActivityResponse {

  @Field()
  status: boolean;

  @Field()
  message: string;

  @Field({nullable: true})
  burnedCalories?: number;

  @Field({nullable: true})
  activity?: Activity

}
