import { User } from "../../../entity/User";
import { NutritionRecomendation } from "../../../entity/recomendation/Recomendation";
import { getAge } from "../user";
import { getRepository, LessThanOrEqual, MoreThanOrEqual } from "typeorm";

export const getRecommnededAmount = async (
  user: User,
  code: string
): Promise<number> => {
  const meta = {
    gender: user.gender,
    age: getAge(user.birth),
  };

  const recommended = await getRepository(NutritionRecomendation).findOne({
    ageStart: LessThanOrEqual(meta.age),
    ageEnd: MoreThanOrEqual(meta.age),
    population: meta.gender,
    code: code,
  });

  return recommended?.quantity || -1;
};
