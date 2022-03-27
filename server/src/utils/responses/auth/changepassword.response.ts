import { ObjectType, Field } from "type-graphql";


@ObjectType()
export class ChangePasswordResponse {

  @Field()
  status: boolean;

  @Field({nullable: true})
  message?: string;
}
