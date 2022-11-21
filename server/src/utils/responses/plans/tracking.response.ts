import { ObjectType, Field } from "type-graphql";
import { Plan } from "../../../entity/Plan";

@ObjectType()
export class TrackingPlanResponse {
  @Field(() => Plan)
  plan: Plan;

  @Field(() => [TrackedElements])
  elements: TrackedElements[];
}

@ObjectType()
class TrackedElements {
  @Field()
  target: number;

  @Field()
  name: string;

  @Field()
  unit: string;

  @Field()
  current: number;

  @Field()
  code: string;
}
