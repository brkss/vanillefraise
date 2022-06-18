import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class TrackMacronutrientsResponse {
  @Field()
  fat: number;

  @Field()
  carbs: number;

  @Field()
  protein: number;

  @Field(() => Date)
  date: Date;
}
