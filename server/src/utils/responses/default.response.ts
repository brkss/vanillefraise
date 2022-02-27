import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class DefaultResponse {

  @Field()
  status: boolean;

  @Field({nullable: true})
  message?: string; 

}
