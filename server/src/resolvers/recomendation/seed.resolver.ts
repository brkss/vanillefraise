import { Resolver, Mutation } from "type-graphql";
import { getData } from "../../utils/data/nutrition/manage";
import { INutritionRecomendation } from "../../utils/types/NutritionRecomendation";
import { Nutrition } from "../../entity/Nutrition";
import { getRepository, Like } from "typeorm";
import { NutritionRecomendation } from "../../entity/recomendation/Recomendation";

@Resolver()
export class SeedNutritionRecomendationResolver {
  @Mutation(() => Boolean)
  async seedRecomendation() {
    const recomendations = await NutritionRecomendation.find();
    if (recomendations.length == 0) {
      const notfound: string[] = [];
      const data: INutritionRecomendation[] = getData();
      let i = 0;
      for (let d of data) {
        const nutrition = await getRepository(Nutrition).findOne({
          name: Like(`%${d.name}%`),
        });
        if (nutrition) {
          d.code = nutrition.code;
          d.unit = nutrition.unit;
          const recoms = new NutritionRecomendation();
          recoms.name = d.name;
          recoms.unit = d.unit;
          recoms.code = d.code;
          recoms.ageEnd = d.ageEnd;
          recoms.ageStart = d.ageStart;
          recoms.population = d.population;
          recoms.quantity = d.quantity;
          await recoms.save();
        } else if (!notfound.includes(d.name)) {
          notfound.push(d.name);
          i++;
          console.log(`${d.name} : NUTRITION NOT FOUND`);
        }
      }
      console.log(`${i}/${data.length} Nutrition not found !`);
      //console.log("Merged Data => ", getData());
      //getData()
      return true;
    }
    return false;
  }
}
