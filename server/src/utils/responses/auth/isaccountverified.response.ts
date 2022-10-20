import { ObjectType, Field } from 'type-graphql';


@ObjectType()
export class IsAccountVerifiedResponse {

  
  @Field()
  status: boolean;

  @Field()
  title: string

  @Field()
  message: string;


}

