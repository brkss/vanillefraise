import { InputType, Field } from "type-graphql";

@InputType()
export class RegisterAdminInput {
  @Field({ nullable: true })
  name?: string;

  email?: string;

  @Field()
  username: string;

  @Field()
  password: string;
}
