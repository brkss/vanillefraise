import { User } from "../../../entity/User";
import { CookedRecipe } from "../../../entity/UserInfo/CookedRecipe";

export const getTokenNutrition = async (user: User, code: string) => {
  if (!user || !code) return -1;
  const cookedRecipes = await CookedRecipe.find({
    where: { user: user },
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
