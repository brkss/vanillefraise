import axios from "axios";

interface IInput {
  ingr: string[];
  name: string;
}

const URL: string = `https://api.edamam.com/api/nutrition-details?app_id=${process.env.EDAM_APP_ID}&app_key=${process.env.EDAM_CLIENT_SECRET}`;

export const recipeNutrition = async (data: IInput) => {
  const res = await axios.post(URL, {
    title: data.name,
    ingr: data.ingr,
  });
  console.log("Res => ", res.data);
  return res;
  /*
  .then(async res => {
    console.log("Recipe nutrition results => ", res.data);
    
  }).catch(e => {
    console.log("Something went wrong while fetching recipe nutrition : ", e);
  })
  */
};
