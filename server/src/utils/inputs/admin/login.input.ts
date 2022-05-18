import { InputType, Field } from "type-graphql";


@InputType()
export class LoginAdminInput {

  @Field()
  username: string;

  @Field()
  password: string;

}
