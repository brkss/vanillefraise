import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class TogglePlanTrackingResponse {
  @Field()
  status: boolean;

  @Field({ nullable: true })
  message?: string;

  @Field({ nullable: true })
  current?: boolean;
}
