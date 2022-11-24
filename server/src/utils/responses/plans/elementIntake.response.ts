import { ObjectType, Field } from 'type-graphql'


@ObjectType()
export class ElementIntakeResponse {

  @Field()
  code: string;

  @Field()
  date: string;

  @Field()
  unit: string;

  @Field()
  intake: number;

  @Field()
  target: number;

}
