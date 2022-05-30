import AsyncStorage from "@react-native-async-storage/async-storage";

export interface IRecipe {
  id: string;
  name: string;
  time: string;
  carbs: string;
  img: string;
}

export const isRecipeSaved = async (id: string): Promise<boolean> => {
  const recipes = await getSavedRecipes();
  const index = recipes.findIndex((x) => x.id === id);
  if (index === -1) return false;
  return true;
};

export const saveRecipe = async (recipe: IRecipe) => {
  if (!recipe || await isRecipeSaved(recipe.id)) return; //trigger error;
  const recipes = JSON.parse((await AsyncStorage.getItem("RECIPES")) || "[]");
  recipes.push(recipe);
  await AsyncStorage.setItem("RECIPES", JSON.stringify(recipes));
};

export const getSavedRecipes = async (): Promise<IRecipe[]> => {
  const recipes = JSON.parse((await AsyncStorage.getItem("RECIPES")) || "[]");
  return recipes;
};
