import { InputType, Field } from 'type-graphql';

@InputType()
export class SaveFoodFiltersInput { 

  @Field(() => [String])
  labels: string[]

}
