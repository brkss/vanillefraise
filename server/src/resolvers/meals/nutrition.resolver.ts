import { Resolver, Query, Arg, UseMiddleware, Ctx } from "type-graphql";
import { isUserAuth } from "../../utils/middlewares/auth.mw";
import { MealRecipesInput } from "../../utils/inputs/meals/mealrecipes.input";
import { DefaultResponse } from "../../utils/responses";
import { MealRecipes, Meal } from "../../entity/Meals";
import { RecipeTotalNutrition } from "../../entity/Nutrition/TotalNutrition";
import { Like } from "typeorm";
import { User } from "../../entity/User";
import { IContext } from "../../utils/types/Context";

@Resolver()
export class MealNutritionResolver {
  @UseMiddleware(isUserAuth)
  @Query(() => DefaultResponse)
  async mealNutrition(
    @Arg("data") data: MealRecipesInput,
    @Ctx() ctx: IContext
  ): Promise<DefaultResponse> {
    if (!data || !data.date || !data.meal) {
      return {
        status: false,
        message: "Invalid Data !",
      };
    }
    const user = await User.findOne({ where: { id: ctx.payload.userID } });
    const meal = await Meal.findOne({ where: { id: data.meal } });
    if (!user || !meal) {
      return {
        status: false,
        message: "Cannot find meal !",
      };
    }
    const mr = await MealRecipes.find({
      where: { meal: meal, date: Like(`${data.date.toLocaleDateString()}`) },
      relations: ["recipe"],
    });
    let nutritions: RecipeTotalNutrition[] = [];
    for (let m of mr) {
      const nutrition = await RecipeTotalNutrition.find({
        where: { recipe: m.recipe },
      });
      nutritions.push(...nutrition);
    }

    // merge nutritions
    let res: RecipeTotalNutrition[] = [];
    for (let n of nutritions) {
      const index = res.findIndex((x) => x.code === n.code);
      if (index == -1) {
        res.push(Object.assign({}, n));
      } else {
        res[index].quantity += n.quantity;
      }
    }

    // test
    for (let n of nutritions) {
      if (n.code === "SUGAR.added") {
        console.log("n ====>>> ", n);
      }
    }
    //console.log("nutritions ->>>> ", nutritions);
    console.log(
      "res ->>>> ",
      res.find((x) => x.code === "SUGAR.added")
    );

    return {
      status: false,
    };
  }
}
