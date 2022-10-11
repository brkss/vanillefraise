import { ObjectType, Field } from 'type-graphql';

@ObjectType()
class IPlanNutritien {
  @Field()
  title: string;

  @Field()
  quantity: number;

  @Field()
  unit: string;

  @Field()
  description: string;
}

@ObjectType()
export class IPlan {

  @Field()
  id: string
  
  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  image: string 

  @Field(() => [IPlanNutritien])
  nutrients: IPlanNutritien[] 
} 
