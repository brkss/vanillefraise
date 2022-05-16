import { InputType, Field } from "type-graphql";


@InputType()
export class UpdateUserInfoInput {

  @Field()
  name: string;

  @Field()
  weight: number;

  @Field()
  height: number;

}
