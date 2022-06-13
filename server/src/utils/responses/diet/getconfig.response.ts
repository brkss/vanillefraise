import { ObjectType, Field } from "type-graphql";
import { MacrosConfig } from "../../../entity/Diet";
import { HealthLabelRefrence } from '../../../entity/Nutrition/HealthLabelReference';

@ObjectType()
export class DietConfigResponse {
  
  @Field()
  status: boolean;

  @Field(() => MacrosConfig, {nullable: true})
  config?: MacrosConfig;

  @Field(() => [HealthLabelRefrence], {nullable: true})
  filters?: HealthLabelRefrence[];
}
