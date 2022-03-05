import { ObjectType, Field } from 'type-graphql';


@ObjectType()
export class MoodOverviewResponse {

  @Field()
  status: boolean;
 
  @Field({nullable: true})
  message?: string

  @Field(() => [MoodOverviewData], {nullable: true})
  data?: MoodOverviewData[];

}

@ObjectType()
export class MoodOverviewData {

  @Field()
  name: string;

  @Field()
  id: string;

  @Field()
  icon: string;

  @Field()
  percent: number;

}
