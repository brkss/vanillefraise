import { Ingredient } from "../../../entity/Recipe";

export const mergeIngredients = (ingredients: Ingredient[]): Ingredient[] => {
  const merged: Ingredient[] = [];

  for (let ing of ingredients) {
    const index = merged.findIndex(
      (x) => x.ingredients === ing.ingredients && x.unit === ing.unit
    );
    if (index === -1) {
      merged.push(ing);
    } else {
      merged[index].amount = (merged[index].amount || 0) + (ing.amount || 0);
    }
  }
  return merged;
};
