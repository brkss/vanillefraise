import { InputType, Field } from 'type-graphql';

@InputType()
export class CreateBulkRecipesInput {

  @Field()
  url: string;

  @Field(() => [String])
  categories: string[];

}
