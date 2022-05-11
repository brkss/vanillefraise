import { ObjectType, Field } from 'type-graphql';


@ObjectType()
export class CookedRecipesResponse {

  @Field()
  status: boolean;

  @Field({nullable: true})
  message?: string;

  @Field({nullable: true})
  calories?: number;
}
