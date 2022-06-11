import { InputType, Field } from 'type-graphql';

@InputType()
export class ConfigDietInput {

  @Field()
  activity_factor: number;

  @Field()
  fat: number;

  @Field()
  carbs: number;

  @Field()
  protein: number;

  @Field(() => [String])
  filters: string[]

  @Field()
  weight: number;

  @Field()
  height: number;


}
