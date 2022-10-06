import { Resolver, Query, UseMiddleware, Ctx } from "type-graphql";
import { User } from "../../entity/User";
import { isUserAuth } from "../../utils/middlewares/auth.mw";
import { DailyNutritionIntakeResponse } from "../../utils/responses/nutrition/intake.response";
import { IContext } from "../../utils/types/Context";
import { CookedRecipe } from "../../entity/UserInfo";
import { getRepository, LessThanOrEqual, Like, MoreThanOrEqual } from "typeorm";
import dayjs from "dayjs";
import {
  NutritienCategory,
  //RecipeTotalNutrition,
  Nutrition,
} from "../../entity/Nutrition";
import { getAge } from "../../utils/helpers/getAge";
import { calculateREE } from "../../utils/helpers/macros";
import { NutritionRecomendation } from "../../entity/recomendation/Recomendation";

@Resolver()
export class NutritionIntakeResolver {
  @UseMiddleware(isUserAuth)
  @Query(() => DailyNutritionIntakeResponse)
  async nutritionCategoryIntake(
    @Ctx() ctx: IContext
  ): Promise<DailyNutritionIntakeResponse> {
    const user = await User.findOne({ where: { id: ctx.payload.userID } });
    console.log("user :", user);
    if (!user)
      return {
        categories: [],
      };
    const meta = {
      gender: user.gender,
      age: getAge(user.birth),
    };

    const cooked = await CookedRecipe.find({
      where: {
        user: user,
        created_at: Like(`%${dayjs().format("YYYY-MM-DD")}%`),
      },
      relations: ["recipe", "recipe.totalnutrition"],
    });

    const nutritions: {
      categoryId: string;
      code: string;
      quantity: number;
      recomendation: number;
      intake: number;
    }[] = [];

    for (let c of cooked) {
      for (let n of c.recipe.totalnutrition) {
        const index = nutritions.findIndex((x) => x.code === n.code);
        if (index === -1) {
          const recomendation = await getRepository(
            NutritionRecomendation
          ).findOne({
            ageStart: LessThanOrEqual(meta.age),
            ageEnd: MoreThanOrEqual(meta.age),
            population: meta.gender,
            code: n.code,
          });
          const nutrition = await Nutrition.findOne({
            where: { code: n.code },
            relations: ["category"],
          });
          nutritions.push({
            code: n.code,
            quantity: n.quantity,
            recomendation: recomendation?.quantity || 1,
            intake: 0,
            categoryId: nutrition?.category.id || "",
          });
        } else {
          nutritions[index].quantity += n.quantity;
        }
      }
    }

    // calclate intake !
    for (let nutrition of nutritions) {
      if (nutrition.code === "ENERC_KCAL")
        nutrition.intake = nutrition.quantity;
      else
        nutrition.intake =
          nutrition.recomendation === -1
            ? -1
            : (nutrition.quantity * 100) / nutrition.recomendation;
    }

    const categories = await NutritienCategory.find({
      relations: ["nutrients"],
    });

    // fill results !
    const results: { name: string; intake: number; id: string }[] = [];
    for (let category of categories) {
      let count = 0;
      let intake = 0;
      for (let nutrition of nutritions) {
        if (nutrition.categoryId === category.id) {
          count++;
          intake += nutrition.intake;
        }
      }
      results.push({
        id: category.id,
        intake: count === 0 ? 0 : intake / count,
        name: category.name,
      });
    }

    // correction !
    for (let i = 0; i < results.length; i++) {
      if (results[i].name === "Energy") {
        const ree = calculateREE(
          user.gender,
          user.weight,
          user.height,
          user.birth
        );
        results[i].intake = (results[i].intake * 100) / ree;
      }
    }

    return {
      categories: results,
    };
  }
}
