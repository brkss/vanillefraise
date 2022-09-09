import { Resolver, Query, UseMiddleware } from "type-graphql";
import { NutritienCategory } from "../../entity/Nutrition";

@Resolver()
export class NutritionStatsResolver {
  @Query(() => [NutritienCategory])
  async nutritions(): Promise<NutritienCategory[]> {
    const nutritions = await NutritienCategory.find({relations: ['nutrients']});
    return nutritions;
  }
}
