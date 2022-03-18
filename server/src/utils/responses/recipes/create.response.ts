import { ObjectType, Field } from 'type-graphql';
import { Recipe } from '../../../entity/Recipe';


@ObjectType()
export class CreateRecipeResponse {

  @Field()
  status: boolean;

  @Field()
  message: string;

  @Field({nullable: true})
  recipe?: Recipe

} 
