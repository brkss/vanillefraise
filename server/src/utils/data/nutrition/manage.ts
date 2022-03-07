import {
  children_elements_data,
  female_elements_data,
  lactation_elements_data,
  male_elements_data,
  pregnancy_elements_data,
} from "./elements";
import {
  children_vitamins_data,
  female_vitamins_data,
  lactation_vitamins_data,
  male_vitamins_data,
  pregnancy_vitamins_data,
} from "./vitamins";
import {
  children_micronutrients_data,
  female_micronutrients_data,
  lactation_micronutrients_data,
  male_micronutrients_data,
  pregnancy_micronutrients_data,
} from "./micronutrients";
import { INutritionRecomendation } from "../../types/NutritionRecomendation";

const recs: any[][] = [
  [
    ...JSON.parse(children_micronutrients_data),
    ...JSON.parse(pregnancy_micronutrients_data),
    ...JSON.parse(lactation_micronutrients_data),
    ...JSON.parse(male_micronutrients_data),
    ...JSON.parse(female_micronutrients_data),
  ],
  [
    ...JSON.parse(children_vitamins_data),
    ...JSON.parse(pregnancy_vitamins_data),
    ...JSON.parse(lactation_vitamins_data),
    ...JSON.parse(male_vitamins_data),
    ...JSON.parse(female_vitamins_data),
  ],
  [
    ...JSON.parse(children_elements_data),
    ...JSON.parse(pregnancy_elements_data),
    ...JSON.parse(lactation_elements_data),
    ...JSON.parse(male_elements_data),
    ...JSON.parse(female_elements_data),
  ],
];

//console.log("Merged data => ", data);

export const getData = (): INutritionRecomendation[] => {
  const data = getAgeRange(recs);
  let results: INutritionRecomendation[] = [];
  data.forEach((d) => {
    const keys = Object.keys(d[0]);
    keys.splice(0, 1);
    keys.splice(keys.length - 3, keys.length - 1);
    console.log("key => ", keys);
    d.forEach((chunk: any) => {
      for (let key of keys) {
        const o: INutritionRecomendation = {
          name: key,
          code: null,
          quantity: parseFloat(chunk[key].replace(',', '')) || -1,
          unit: null,
          population: chunk["gender"],
          ageStart: Number(chunk["ageStart"]),
          ageEnd: Number(chunk["ageEnd"]),
        };
        results.push(o);
      }
    });
  });
  return results;
};

export const getAgeRange = (data: any[][]) => {
  let results: any[][] = [];
  data.forEach((d) => {
    const res = d.map((el) => {
      const age = el.age.split(" ")[0].split("–");
      console.log("AGE => ", age);
      return {
        ...el,
        ageStart: parseInt(age[0]),
        ageEnd: parseInt(age[1]),
      };
    });
    results.push(res);
  });
  return results;
};
