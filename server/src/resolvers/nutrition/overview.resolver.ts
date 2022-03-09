import { Resolver, Query, UseMiddleware, Ctx } from "type-graphql";
import { User } from "../../entity/User";
import { CookedRecipe } from "../../entity/UserInfo/CookedRecipe";
import { Recipe } from "../../entity/Recipe";
import { Nutrition, RecipeTotalNutrition } from "../../entity/Nutrition";
import { isUserAuth } from "../../utils/middlewares";
import { IContext } from "../../utils/types/Context";
import {
  NutritionOverviewResponse,
  NutritionOverviewData,
} from "../../utils/responses/nutrition";
import { NutritionRecomendation } from "../../entity/recomendation/Recomendation";
import { getAge } from "../../utils/helpers/getAge";
import { LessThanOrEqual, MoreThanOrEqual, getRepository } from "typeorm";
import { UserCaloriesResponse } from "../../utils/responses/nutrition/calories.response";

@Resolver()
export class NutritionOverviewResolver {
  @UseMiddleware(isUserAuth)
  @Query(() => NutritionOverviewResponse)
  async userNutrition(
    @Ctx() ctx: IContext
  ): Promise<NutritionOverviewResponse> {
    const user = await User.findOne({ where: { id: ctx.payload.userID } });
    if (!user) {
      return {
        status: false,
        message: "Invalid User !",
      };
    }
    const meta = {
      gender: user.gender,
      age: getAge(user.birth),
    };
    const nutrients = await Nutrition.find();
    const recipesNutrition: RecipeTotalNutrition[] = [];
    const cookedRecipes = await CookedRecipe.find({
      where: { user: user },
      relations: ["recipe"],
    });
    for (let cooked of cookedRecipes) {
      const nutrition = await RecipeTotalNutrition.find({
        where: { recipe: cooked.recipe },
      });
      recipesNutrition.push(...nutrition);
    }

    const results = nutrients.map((n) => {
      let quantity = 0;
      for (let rn of recipesNutrition) {
        if (rn.code == n.code) quantity += rn.quantity;
      }
      return {
        name: n.name,
        code: n.code,
        quantity: quantity,
        unit: n.unit,
      };
    });

    const rec: NutritionOverviewData[] = [];

    for (let res of results) {
      const nr = await getRepository(NutritionRecomendation).findOne({
        ageStart: LessThanOrEqual(meta.age),
        ageEnd: MoreThanOrEqual(meta.age),
        population: meta.gender,
        code: res.code,
      });
      rec.push({
        ...res,
        recomendation: nr?.quantity || -1,
      });
    }

    return {
      status: true,
      data: rec,
    };
  }

  @UseMiddleware(isUserAuth)
  @Query(() => UserCaloriesResponse)
  async userCalories(@Ctx() ctx: IContext): Promise<UserCaloriesResponse> {
    const user = await User.findOne({ where: { id: ctx.payload.userID } });
    if (!user) {
      return {
        status: false,
        message: "User Not Found !",
      };
    }

    try {
      const target = user.bmi;
      const cookedRecipes = await CookedRecipe.find({
        where: { user: user },
        relations: ["recipe"],
      });
      let taken = 0;
      for (let cr of cookedRecipes) {
        const recipe = await Recipe.findOne({ where: { id: cr.recipe.id } });
        const energy = await RecipeTotalNutrition.findOne({
          where: { recipe: recipe, code: "ENERC_KCAL" },
        });
        if (energy) taken += energy.quantity;
      }

      return {
        status: true,
        burnt: 0,
        target: target,
        value: taken,
        unit: 'KCal'
      };
    } catch (e) {
      console.log("Something went wrong : ", e);
      return {
        status: false,
        message: "Something went wrong !",
      };
    }
  }
}
