import { Resolver, Query } from "type-graphql";
import { Meal } from "../../entity/Meals/Meal";

@Resolver()
export class ListMealsResolver {
  @Query(() => [Meal])
  async meals(): Promise<Meal[]> {
    const meals = await Meal.find();
    return meals;
  }
}
