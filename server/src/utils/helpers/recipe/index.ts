import Axios from "axios";

export interface IIngredient {
  name: string;
  quantity: number;
  unit: string;
  raw: string;
}

interface IRecipe {
  title: string;
  time: number;
  yields: string;
  ingredients: IIngredient[];
  instructions: string[];
  image: string;
  host: string;
  nutrition: any;
}

export const get_recipe = async (url: string): Promise<IRecipe | null> => {
  if (!url) return null;
  const res = await Axios({
    method: "POST",
    url: `${process.env.RECIPE_API_URL}/get-recipe`,
    data: {
      url: url,
    },
  });
  if (res.data.success === false) return null;
  console.log("get recipe results : ", res.data.recipe.nutrition);
  return res.data.recipe;
};
