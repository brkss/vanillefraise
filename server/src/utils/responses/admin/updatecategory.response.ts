import { ObjectType, Field } from 'type-graphql';
import { RecipeCategory } from '../../../entity/Recipe/Category';

@ObjectType()
export class UpdateCategoryResponse {

  @Field()
  status: boolean;

  @Field({nullable: true})
  message?: string;

  @Field({nullable: true})
  category?: RecipeCategory 
}
