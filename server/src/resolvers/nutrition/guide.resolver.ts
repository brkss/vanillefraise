import { Resolver, Mutation } from "type-graphql";
import { nutrition_guide } from "../../utils/data/nutrition_guides";
import { Nutrition } from "../../entity/Nutrition";

@Resolver()
export class NutritionGuideResolver {
  @Mutation(() => Boolean)
  async seedNutritionGuide() {
    const guides = await Nutrition.find();
    if (guides.length == 0) {
      for (let ng of nutrition_guide) {
        const nutrition = new Nutrition();
        nutrition.name = ng.name;
        nutrition.code = ng.ntr_code;
        nutrition.unit = ng.unit;
        await nutrition.save();
      }
      return true;
    }
    return false;
  }
}
