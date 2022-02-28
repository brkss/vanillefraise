import { InputType, Field } from 'type-graphql';

@InputType()
export class CreateMoodRecordInput {

  @Field(() => [String])
  moods: string[];

}
