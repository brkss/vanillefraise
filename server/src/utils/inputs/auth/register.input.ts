import { InputType, Field } from "type-graphql";

@InputType()
export class RegisterInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  username: string;

  @Field()
  password: string;

  @Field()
  birth: Date;

  @Field()
  bmi: number;

  @Field()
  gender: string;

  @Field()
  height: number;

  @Field()
  weight: number;

  @Field(() => [String])
  sc: string[];

}
