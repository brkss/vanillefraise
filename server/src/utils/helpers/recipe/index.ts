import Axios from "axios";

interface IRecipe {
  title: string;
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
  console.log("get recipe results : ", res);
  return {
    title: "SUCCESS",
  };
};

