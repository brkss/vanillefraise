import { Resolver, Query, Arg, UseMiddleware, Ctx } from "type-graphql";
import { RecipeNutritionResponse } from "../../utils/responses/nutrition";
import {
  RecipeDietLabel,
  RecipeHealthLabel,
  RecipeTotalDaily,
  RecipeTotalNutrition,
  RecipeTotalNutritionKcal,
} from "../../entity/Nutrition";
import { Recipe } from "../../entity/Recipe";
import { MoreThan } from "typeorm";
import { filterRecipes } from "../../utils/helpers/FilterRecipes";
import { isUserAuth } from "../../utils/middlewares";
import { IContext } from "../../utils/types/Context";
import { User } from "../../entity/User";

@Resolver()
export class RecipeNutritionResolver {
  @Query(() => Number)
  async recipeEnergy(@Arg("recipe_id") recipe_id: string): Promise<number> {
    if (!recipe_id) return -1;
    const recipe = await Recipe.findOne({ where: { id: recipe_id } });
    if (!recipe) return -1;
    const nutrition = await RecipeTotalNutrition.findOne({
      where: { recipe: recipe, code: "ENERC_KCAL" },
    });
    if (!nutrition) return -1;
    return nutrition.quantity;
  }

  @Query(() => RecipeNutritionResponse)
  async getRecipeNutrition(
    @Arg("recipe_id") recipe_id: string
  ): Promise<RecipeNutritionResponse> {
    const res: RecipeNutritionResponse = {
      dietLabels: [],
      healthLabels: [],
      totalDaily: [],
      totalNutrition: [],
      totalNutritionKcal: [],
    };

    const recipe = await Recipe.findOne({ where: { id: recipe_id } });
    if (!recipe) return res;

    res.dietLabels = await RecipeDietLabel.find({ where: { recipe: recipe } });
    res.healthLabels = await RecipeHealthLabel.find({
      where: { recipe: recipe },
    });
    res.totalDaily = await RecipeTotalDaily.find({ where: { recipe: recipe } });
    res.totalNutrition = await RecipeTotalNutrition.find({
      where: { recipe: recipe },
    });
    res.totalNutritionKcal = await RecipeTotalNutritionKcal.find({
      where: { recipe: recipe },
    });
    return res;
  }

  @UseMiddleware(isUserAuth)
  @Query(() => [Recipe])
  async recipeByNutrition(
    @Arg("code") code: string,
    @Ctx() ctx: IContext
  ): Promise<Recipe[]> {
    if (!code) return [];
    const user = await User.findOne({ where: { id: ctx.payload.userID } });
    if (!user) return [];
    const nutritions = await RecipeTotalNutrition.find({
      where: { code: code, quantity: MoreThan(0) },
      relations: ["recipe", "recipe.healthlabel"],
      order: { quantity: "DESC" },
    });
    const recipes = nutritions.map((nut) => nut.recipe);
    //return recipes;
    const data = await filterRecipes(recipes, user);
    return data;
  }
}
