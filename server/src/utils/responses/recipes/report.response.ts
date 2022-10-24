import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class ReportRecipeResponse {
  @Field()
  status: boolean;

  @Field()
  message: string;
}
