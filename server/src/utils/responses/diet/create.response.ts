import { ObjectType, Field } from "type-graphql";
import { DietConfigResponse } from "./getconfig.response";
import { UserMacrosResponse } from './macros.response';

@ObjectType()
export class CreateDietConfigResponse {
  @Field()
  status: boolean;

  @Field({ nullable: true })
  message?: string;

  @Field(() => DietConfigResponse, { nullable: true })
  data?: DietConfigResponse;
  
  @Field(() => UserMacrosResponse, {nullable: true})
  macros?: UserMacrosResponse;

}
