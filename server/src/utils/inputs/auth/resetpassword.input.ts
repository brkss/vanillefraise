import { InputType, Field } from "type-graphql";

@InputType()
export class ResetPasswordInput {
  @Field()
  newPassword: string;

  @Field()
  token: string;
}
