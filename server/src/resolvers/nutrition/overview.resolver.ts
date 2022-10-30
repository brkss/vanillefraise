import { Resolver, Query, UseMiddleware, Ctx } from "type-graphql";
import { User } from "../../entity/User";
import { CookedRecipe } from "../../entity/UserInfo/CookedRecipe";
import { Recipe } from "../../entity/Recipe";
import {
  Nutrition,
  RecipeTotalNutrition,
  NutritienCategory,
} from "../../entity/Nutrition";
import { isUserAuth } from "../../utils/middlewares";
import { IContext } from "../../utils/types/Context";
import {
  NutritionOverviewResponse,
  NutritionOverviewData,
  NutritionCategoryOverview,
} from "../../utils/responses/nutrition";
import { NutritionRecomendation } from "../../entity/recomendation/Recomendation";
import { getAge } from "../../utils/helpers/user/getAge";
import { Like, LessThanOrEqual, MoreThanOrEqual, getRepository } from "typeorm";
import { UserCaloriesResponse } from "../../utils/responses/nutrition/calories.response";
import dayjs from "dayjs";
import { DietRecord } from "../../entity/Diet/Record";
import { calculateREE } from "../../utils/helpers/user/macros";

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
    const nutrients = await Nutrition.find({ relations: ["category"] });
    const recipesNutrition: RecipeTotalNutrition[] = [];
    const cookedRecipes = await CookedRecipe.find({
      where: {
        user: user,
        created_at: Like(`%${dayjs().format("YYYY-MM-DD")}%`),
      },
      relations: ["recipe"],
    });
    for (let cooked of cookedRecipes) {
      const nutrition = await RecipeTotalNutrition.find({
        where: { recipe: cooked.recipe },
      });
      recipesNutrition.push(...nutrition);
    }
    // map nutrients by categories
    const categories = await NutritienCategory.find();
    const data: NutritionCategoryOverview[] = categories.map((cat) => ({
      id: cat.id,
      name: cat.name,
      nutritiens: [],
    }));
    for (let n of nutrients) {
      let quantity = 0;
      for (let rn of recipesNutrition) {
        if (rn.code == n.code) {
          quantity += rn.quantity;
        }
      }
      const nr = await getRepository(NutritionRecomendation).findOne({
        ageStart: LessThanOrEqual(meta.age),
        ageEnd: MoreThanOrEqual(meta.age),
        population: meta.gender,
        code: n.code,
      });
      let obj: NutritionOverviewData = {
        name: n.name,
        code: n.code,
        quantity: quantity,
        unit: n.unit,
        recomendation: nr?.quantity || -1,
      };
      const index = data.findIndex((x) => x.id === n.category.id);
      if (index > -1) {
        data[index].nutritiens.push(obj);
      }
    }

    return {
      status: true,
      data: data,
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
      const target = calculateREE(
        user.gender,
        user.weight,
        user.height,
        user.birth
      );
      const cookedRecipes = await CookedRecipe.find({
        where: {
          user: user,
          created_at: Like(`%${dayjs().format("YYYY-MM-DD")}%`),
        },
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
      const records = await DietRecord.find({
        where: {
          user: user,
          type: "IN_CALORIES",
          created_at: Like(`%${dayjs().format("YYYY-MM-DD")}%`),
        },
      });

      return {
        status: true,
        burnt: 0,
        target: target,
        value: taken + records.reduce((s, e) => s + e.value, 0),
        unit: "KCal",
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
