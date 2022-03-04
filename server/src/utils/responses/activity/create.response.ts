import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class CreateActivityResponse {

  @Field()
  status: boolean;

  @Field()
  message: string;


}
