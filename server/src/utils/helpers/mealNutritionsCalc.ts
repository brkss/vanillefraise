import convert from "convert-units";
import { RecipeTotalNutrition } from "../../entity/Nutrition/TotalNutrition";

export const calculate_domination_in_meal = (
  nutritients: RecipeTotalNutrition[]
): RecipeTotalNutrition[] => {
  // total!!!!!
  let total = 0;
  for (let n of nutritients) {
    total += n.quantity;
  }

  console.log("total : ", total);
  const data = nutritients.map((n) => {
    //100 / (10 * 100) ;
    let percent = 0;
    if (n.quantity > 0) percent = (n.quantity * 100) / total;
    return {
      ...n,
      quantity: Math.floor(percent),
    };
  }) as RecipeTotalNutrition[];
  return data;
};

export const calculateNutrients = (
  nutritients: RecipeTotalNutrition[]
): RecipeTotalNutrition[] => {
  const data = nutritients.map((n) => {
    let val = 0;
    if (n.unit === "kcal") {
      // convert from calorie to gram !
      val = n.quantity * 0.129598;
    } else {
     
      val = convert(n.quantity)
        .from(n.unit === "µg" ? "mcg" : (n.unit as any))
        .to("g");
    }
    return {
      ...n,
      quantity: val as number,
      unit: "g",
    } as RecipeTotalNutrition;
  });
  return calculate_domination_in_meal(data);
};
