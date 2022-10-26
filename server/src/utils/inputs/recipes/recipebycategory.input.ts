import { InputType, Field } from "type-graphql";

@InputType()
export class RecipeByCategoryInput {
  @Field()
  cat_id: string;

  @Field()
  batch: number;
  
  @Field()
  seed: number;

}
