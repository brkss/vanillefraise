import { ObjectType, Field } from "type-graphql";
import { MacrosConfig } from "../../../entity/Diet";

@ObjectType()
export class DietConfigResponse {
  
  @Field()
  status: boolean;

  @Field(() => MacrosConfig, {nullable: true})
  config?: MacrosConfig;

  @Field(() => [String], {nullable: true})
  filters?: string[];
}
