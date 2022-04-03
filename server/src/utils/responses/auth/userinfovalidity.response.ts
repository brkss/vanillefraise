import { ObjectType, Field } from 'type-graphql';


@ObjectType()
export class UserInfoValidityResponse {

  @Field()
  email: boolean;

  @Field()
  username: boolean
}
