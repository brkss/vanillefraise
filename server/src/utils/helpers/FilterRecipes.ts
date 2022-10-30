import { Recipe } from "../../entity/Recipe/Recipe";
import { DietFoodFilter } from "../../entity/Diet";
import { User } from "../../entity/User";

export const filterRecipes = async (recipes: Recipe[], user: User) => {
  let data: Recipe[] = [];
  const filters = await DietFoodFilter.find({
    where: { user: user },
    relations: ["healthlabel"],
  });
  if (filters.length === 0) return recipes;
  for (let r of recipes) {
    if (checkFilter(r, filters)) data.push(r);
  }
  return data;
};

export const checkFilter = (recipe: Recipe, filters: DietFoodFilter[]) => {
  for (let filter of filters) {
    for (let hl of recipe.healthlabel) {
      if (filter.healthlabel.label.split(" ").join("_") === hl.label)
        return true;
    }
  }
  return false;
};
