import { InputType, Field} from 'type-graphql';


@InputType()
export class MealRecipesInput {

  @Field()
  date: Date;

  @Field()
  meal: string;

}
