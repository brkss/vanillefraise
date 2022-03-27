import { InputType, Field } from 'type-graphql';

@InputType()
export class ChangePasswordInput {

  @Field()
  oldpass: string;

  @Field()
  newpass: string;

}
