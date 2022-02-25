import { ObjectType, Field } from 'type-graphql';
import { Recipe } from '../../../entity/Recipe';

@ObjectType()
export class RecipeItemResponse {

  @Field()
  status: boolean;

  @Field({nullable: true})
  message?: string;

  @Field({nullable: true})
  recipe?: Recipe;

}
