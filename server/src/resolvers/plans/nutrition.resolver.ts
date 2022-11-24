import { Resolver, Query, UseMiddleware, Ctx, Arg } from "type-graphql";
import { isUserAuth } from "../../utils/middlewares/auth.mw";
import { User } from "../../entity/User";
import { IContext } from "../../utils/types/Context";
import { NutritienCategory } from "../../entity/Nutrition/NutrientCategory";
import { NewPlanNutritionResponse, ElementIntakeResponse } from "../../utils/responses";
import { getRecommnededAmount } from "../../utils/helpers/nutrition";
import { Not } from 'typeorm';
import { TrackedElement } from '../../entity/Plan/TrackedElement';
import { CookedRecipe } from "../../entity/UserInfo";
import { mergeDates } from "../../utils/helpers";

@Resolver()
export class PlanNutritionResolver {
  @UseMiddleware(isUserAuth)
  @Query(() => [NewPlanNutritionResponse])
  async nutritionsByCategory(
    @Ctx() ctx: IContext
  ): Promise<NewPlanNutritionResponse[]> {
    const user = await User.findOne({ where: { id: ctx.payload.userID } });
    if (!user) {
      return [];
    }

    const nutritions = await NutritienCategory.find({
      where: [{name: Not("Energy")}, {name: Not("Water")}],
      relations: ["nutrients"],
    });
    const results: NewPlanNutritionResponse[] = [];

    for (let n of nutritions) {
      //const recommended = await getRecommnededAmount(user,)
      const obj: NewPlanNutritionResponse = {
        category: n,
        items: await Promise.all(
          n.nutrients.map(async (nutrition) => ({
            nutrition: nutrition,
            recommendation: await getRecommnededAmount(user, nutrition.code),
          }))
        ),
      };
      results.push(obj);
    }
    return results;
  }
  
  @UseMiddleware(isUserAuth)
  @Query(() => [ElementIntakeResponse])
  async elementIntake(@Arg('element_id') element_id: string, @Ctx() ctx: IContext): Promise<ElementIntakeResponse[]> {
    if(!element_id)
      return [];
    const user = await User.findOne({where: {id: ctx.payload.userID}});
    if(!user){
      return [];
    }
    const element = await TrackedElement.findOne({where: {id: element_id}, relations: ['nutriton']}); 
    if(!element)
      return [];
    const cooked = await CookedRecipe.find({where: {user: user}, relations: ['recipe', 'recipe.totalnutrition']});
    let data : {intake: number, date: Date | string}[] = [];
    for(let cr of cooked){
      for(let nut of cr.recipe.totalnutrition){
        if(nut.code === element.nutriton.code){
          data.push({intake: nut.quantity, date: cr.created_at});
        }
      }
    }

    data = mergeDates(data);
    let response: ElementIntakeResponse[] = data.map((item): ElementIntakeResponse => ({
      date: item.date as string,
      intake: item.intake,
      code: element.nutriton.code,
      unit: element.nutriton.unit,
      target: element.quantity
    }))

    return response; 
  }
}
