import { InputType, Field } from "type-graphql";

@InputType()
export class UserInfoValidtyInput {
  @Field()
  username: string;

  @Field()
  email: string;
}
