import { InputType, Field } from 'type-graphql';


@InputType()
export class CreatePlanInput {

  @Field()
  name: string;

  @Field(() => [PlanElements])
  elements: PlanElements[]

}

@InputType()
class PlanElements {
  
  @Field()
  nutrition_id: string;

  @Field()
  quantity: number;

}
