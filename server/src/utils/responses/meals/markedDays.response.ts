import { ObjectType, Field } from 'type-graphql';


@ObjectType()
export class MarkedDaysResponse {

  @Field()
  status: boolean;

  @Field({nullable: true})
  message?: string; 

  @Field(() => [MarkedDates], {nullable: true})
  markedDates?: MarkedDates[];
}

@ObjectType()
class MarkedDates {

  @Field()
  date: string;

  @Field()
  count: number;

}



