import { TRANSLATE_URI } from "../../config/defaults";

interface IIngredient {
  txt: string;
  amount: number;
  unit: string;
}

interface IInstruction {
  txt: string;
  index: number;
}

export const translate_instructions = async (
  target: string,
  instructions: IInstruction[]
) => {
  const res = await fetch(`${TRANSLATE_URI}/instructions`, {
    method: "POST",
    body: JSON.stringify({
      target: target,
      instructions: instructions,
    }),
  });
  const data = await res.json();
  return data;
};

export const translate_ingredients = async (
  target: string,
  ingredients: IIngredient[]
) => {
  const res = await fetch(`${TRANSLATE_URI}/ingredients`, {
    method: "POST",
    body: JSON.stringify({
      target: target,
      ingredients: ingredients,
    }),
  });
  const data = await res.json();
  return data;
};
