import { InputType, Field } from 'type-graphql';

@InputType()
export class CreateRecordInput {

  @Field()
  value: number;

  @Field()
  category: number;

  @Field(() => Date)
  time: Date;
 
  @Field(() => Date)
  date: Date;

}
