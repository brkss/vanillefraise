import { ObjectType, Field } from "type-graphql";
import { RecipeCategory } from "../../../entity/Recipe/Category";

@ObjectType()
export class CreateRecipeCategoryResponse {
  @Field()
  status: boolean;

  @Field({ nullable: true })
  message?: string;

  @Field(() => RecipeCategory, {nullable: true})
  category?: RecipeCategory;
}
