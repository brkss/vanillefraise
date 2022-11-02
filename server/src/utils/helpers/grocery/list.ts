import { createQueryBuilder } from "typeorm";
//import { Ingredient } from "../../../entity/Recipe/Ingredient";

export const groceryList = async () => {
  const ingredients = await createQueryBuilder("ingredients")
    .select(["ingredients"])
    .distinct(true)
    .getRawMany();

  return ingredients;
};
