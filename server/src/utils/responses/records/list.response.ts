import { ObjectType, Field } from 'type-graphql';
import { Record } from '../../../entity/Record';

@ObjectType()
export class ListRecordsResponse {

  @Field()
  status: boolean;

  @Field({nullable: true})
  message?: string;

  @Field(() => [Record], {nullable: true})
  records?: Record[];

}
