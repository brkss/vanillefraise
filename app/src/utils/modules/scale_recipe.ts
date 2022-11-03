import { TranslatedIngredient } from "../../generated/graphql";

export const scale = (amount: number, target: number, serving: number): number => {
  console.log("scale to this =>> ", (amount * target) / serving);
  return (amount * target) / serving;
};

export const scaleRecipe = (
  servings: number,
  target: number,
  ingredients: TranslatedIngredient[]
): TranslatedIngredient[] => {
  if (servings === target) return ingredients;
  console.log("scale recipe sevings :::: ", servings);
  const results: TranslatedIngredient[] = ingredients.map((ing) => {
    return {
      ...ing,
      amount: scale(parseFloat(ing.amount), target, servings).toString(),
    } as TranslatedIngredient;
  });

  return results;
};
