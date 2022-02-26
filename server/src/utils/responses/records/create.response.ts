import { ObjectType, Field } from 'type-graphql';
import { Record } from '../../../entity/Record';

@ObjectType()
export class CreateRecordResponse {
  
  @Field()
  status: boolean;
  
  @Field()
  message?: string;

  @Field(() => Record)
  record?: Record;
}
