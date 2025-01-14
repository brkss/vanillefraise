import { User } from "../../../entity/User";
import { CookedRecipe } from "../../../entity/UserInfo/CookedRecipe";
import dayjs from "dayjs";
import { Like } from "typeorm";

export const getTokenNutrition = async (user: User, code: string, date?: Date) => {
  if (!user || !code) return -1;
  const cookedRecipes = await CookedRecipe.find({
    where: {
      user: user,
      created_at: Like(`%${dayjs(date || new Date()).format("YYYY-MM-DD")}%`),
    },
    relations: ["recipe", "recipe.totalnutrition"],
  });
  let results = 0;
  for (let cr of cookedRecipes) {
    for (let nr of cr.recipe.totalnutrition) {
      if (nr.code === code) {
        results += nr.quantity;
      }
    }
  }
  return results;
};
