import { ObjectType, Field } from 'type-graphql';


@ObjectType()
export class CreateRecipeResponse {

  @Field()
  status: boolean;

  @Field()
  message: string;

} 
