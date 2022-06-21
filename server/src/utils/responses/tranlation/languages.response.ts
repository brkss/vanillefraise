import { ObjectType, Field } from 'type-graphql';


@ObjectType()
export class LanguagesResponse {

  @Field()
  name: string;

  @Field()
  id: string;

}
