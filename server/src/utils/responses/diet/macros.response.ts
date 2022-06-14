import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class UserMacrosResponse {
  @Field()
  status: boolean;

  @Field({ nullable: true })
  message?: string;

  @Field({ nullable: true })
  ree?: number;

  @Field({ nullable: true })
  tdee?: number;
}
