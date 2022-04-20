import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class CreateMoodResponse {

  @Field(() => Boolean)
  status: boolean;

  @Field(() => String, {nullable: true})
  messsage?: string;

  @Field(() => String, {nullable: true})
  mood_id?: string;

  @Field(() => String, {nullable: true})
  percent?: number;

}
