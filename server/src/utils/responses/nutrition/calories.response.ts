import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class UserCaloriesResponse {

  @Field()
  status: boolean;

  @Field({nullable: true})
  message?: string;

  @Field({nullable: true})
  target?: number;
  
  @Field({nullable: true})
  value?: number;

  @Field({nullable: true})
  burnt?: number;

  @Field({nullable: true})
  unit?: string; 

}
