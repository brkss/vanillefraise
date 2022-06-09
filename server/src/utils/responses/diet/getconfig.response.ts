import { ObjectType, Field } from "type-graphql";
import { MacrosConfig } from "../../../entity/Diet";

@ObjectType()
export class DietConfigResponse {
  @Field(() => MacrosConfig)
  config: MacrosConfig;

  @Field(() => [String])
  filters: string[];
}
