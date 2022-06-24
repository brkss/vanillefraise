import * as Storage from "expo-secure-store";

interface IMealSchedule {
  name: string;
  value: Date;
}

export const saveMealsSchedule = async (data: IMealSchedule[]) => {
  const meals = [];
  await Storage.deleteItemAsync("MEALS");
  for (let meal of data) {
    meals.push({
      name: meal.name,
      value: meal.value,
    });
  }
  await Storage.setItemAsync("MEALS", JSON.stringify(meals));
};

