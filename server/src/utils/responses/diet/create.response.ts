import { ObjectType, Field } from "type-graphql";
import { DietConfigResponse } from "./getconfig.response";

@ObjectType()
export class CreateDietConfigResponse {
  @Field()
  status: boolean;

  @Field({ nullable: true })
  message?: string;

  @Field(() => DietConfigResponse, { nullable: true })
  data?: DietConfigResponse;
}
