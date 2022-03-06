import { Resolver, Mutation } from "type-graphql";
import { getData } from "../../utils/data/nutrition/manage";

@Resolver()
export class SeedNutritionRecomendationResolver {
  @Mutation(() => Boolean)
  async seedRecomendation() {
    console.log("Merged Data => ", getData());
    //getData()
    return true;
  }
}
