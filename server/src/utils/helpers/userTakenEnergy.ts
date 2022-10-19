import dayjs from "dayjs";
import { User } from "../../entity/User";
import { CookedRecipe } from "../../entity/UserInfo";
import { Like } from "typeorm";

export const getUserTakenEnergy = async (user: User): Promise<Number> => {
  if (!user) return 0;

  const cookedRecipes = await CookedRecipe.find({
    where: {
      user: user,
      created_at: Like(`%${dayjs().format("YYYY-MM-DD")}%`),
    },
    relations: ["recipe", "recipe.totalnutrition"],
  });

  if (cookedRecipes.length === 0) return 0;

  let energy = 0;

  for (let cooked of cookedRecipes) {
    for (let nutrition of cooked.recipe.totalnutrition) {
      if (nutrition.code === "ENERC_KCAL") {
        energy += nutrition.quantity;
      }
    }
  }

  return energy;
};
