import { ObjectType, Field } from 'type-graphql';
import { User } from '../../../entity/User';

@ObjectType()
export class VerifyResetPasswordTokenResponse {

  @Field()
  status: boolean;

  @Field({nullable: true})
  message?: string;

  @Field(() => User, {nullable: true})
  user?: User;

}
