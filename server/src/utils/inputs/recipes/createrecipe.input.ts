import { InputType, Field } from 'type-graphql';

@InputType()
export class CreateRecipeInput { 

  @Field()
  url: string;

  @Field(() => [String])
  categories: string[]

}
