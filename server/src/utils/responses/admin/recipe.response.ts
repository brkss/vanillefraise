import { ObjectType, Field } from 'type-graphql';
import { Recipe } from '../../../entity/Recipe';


@ObjectType()
export class AdminRecipesResponse {
  
  @Field()
  recipe: Recipe;

}
