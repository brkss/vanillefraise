const URL = "http://localhost:3040/ingredients";

interface IIngredient {
  txt: string;
  amount: number;
  unit: string;
}

interface IInput {
  target: string;
  ingredients: IIngredient[];
}

export const translate_ingredients = async (
  target: string,
  ingredients: IIngredient[]
) => {
  const res = await fetch(URL, {
    method: "POST",
    body: JSON.stringify({
      target: target,
      ingredients: ingredients,
    }),
  });
  const data = await res.json();
  return data;
  /*
  new Promise((resolver, reject) => {
  fetch(URL, {
    method: "POST",
    body: JSON.stringify({
      target: target,
      ingredients: ingredients,
    }),
  return data;
    .then((res) => res.json())
    .then((res) => {
      console.log("translating results : ", res);
    });
  })*/
};
