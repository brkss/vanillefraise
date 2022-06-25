import * as Storage from "expo-secure-store";
import { IMealSchedule } from "./save";

export const getMealsSchedule = async (): Promise<IMealSchedule[]> => {
  let meals: IMealSchedule[] = JSON.parse(
    (await Storage.getItemAsync("MEALS_SCHEDULE")) || "[]"
  );

  if (meals.length === 0) {
    // init mealsl;
    meals = [
      {
        name: "BREAKFAST",
        time: new Date("Fri Jun 10 2022 07:30:00 GMT+0100 (GMT+01:00)"),
      },
      {
        name: "LUNCH",
        time: new Date("Fri Jun 10 2022 12:30:00 GMT+0100 (GMT+01:00)"),
      },
      {
        name: "DINNER",
        time: new Date("Fri Jun 10 2022 21:30:00 GMT+0100 (GMT+01:00)"),
      },
    ];
    await Storage.setItemAsync("MEALS_SCHEDULE", JSON.stringify(meals));
  }
  return meals;
};
