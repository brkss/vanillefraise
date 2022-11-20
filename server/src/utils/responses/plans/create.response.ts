import { ObjectType, Field } from 'type-graphql';
import { Plan } from '../../../entity/Plan';

@ObjectType()
export class CreatePlanResponse {

  @Field()
  status: boolean;

  @Field({nullable: true})
  message?: string;

  @Field(() => Plan, {nullable: true})
  plan?: Plan

}
