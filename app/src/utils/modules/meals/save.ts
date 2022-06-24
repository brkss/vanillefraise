import * as Storage from "expo-secure-store";

export interface IMealSchedule {
  name: string;
  time: Date;
}

export const saveMealsSchedule = async (data: IMealSchedule[]) => {
  const meals = [];
  await Storage.deleteItemAsync("MEALS_SCHEDULE");
  for (let meal of data) {
    meals.push({
      name: meal.name,
      time: meal.time,
    });
  }
  await Storage.setItemAsync("MEALS_SCHEDULE", JSON.stringify(meals));
};
