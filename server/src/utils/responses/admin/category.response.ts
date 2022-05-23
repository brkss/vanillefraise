import { ObjectType, Field,  } from 'type-graphql';
import { RecipeCategory } from '../../../entity/Recipe';

@ObjectType()
export class AdminCategoryResponse {

  @Field()
  category: RecipeCategory;

  @Field()
  count: number;

}
