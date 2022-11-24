import { InputType, Field } from 'type-graphql';


@InputType()
export class ElementIntakeInput {

  @Field()
  plan_id: string;

  @Field()
  element_id: string;

}
