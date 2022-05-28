import { Ingredient } from "../../generated/graphql";

const scale = (amount: number, target: number, serving: number): number => {
  console.log("scale to this =>> ", (amount * target) / serving);
  return (amount * target) / serving;
};

export const scaleRecipe = (
  servings: number,
  target: number,
  ingredients: Ingredient[]
): Ingredient[] => {
  if (servings === target) return ingredients;
  console.log("scale recipe sevings :::: ", servings);
  const results: Ingredient[] = ingredients.map((ing) => {
    return {
      ...ing,
      amount: scale(parseFloat(ing.amount), target, servings).toString(),
    } as Ingredient;
  });

  return results;
};
