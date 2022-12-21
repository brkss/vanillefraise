import {
  CreateMealsResolver,
  NutrientCategoryResolver,
  NutritionGuideResolver,
  HealthLabelsResolver,
  RecipeCategoryResolver,
  SeedNutritionRecomendationResolver,
  RecordCategoryResolver,
} from "../resolvers";
import { Nutrition } from "../entity/Nutrition/Nutrition";

const cleanup = async () => {
  const nutrions = await Nutrition.find();

  for (let i = 0; i < nutrions.length; i++) {
    for (let j = i; j < nutrions.length; j++) {
      if (
        nutrions[i].id !== nutrions[j].id &&
        nutrions[i].code === nutrions[j].code
      ) {
        await Nutrition.remove(nutrions[j]);
        nutrions.splice(j, 1);
      }
    }
  }
};

export const seed = async () => {
  const meals = new CreateMealsResolver();
  const nutritient = new NutrientCategoryResolver();
  const nutrition_guide = new NutritionGuideResolver();
  const healthLalbel = new HealthLabelsResolver();
  const recipe_category = new RecipeCategoryResolver();
  const recomendation = new SeedNutritionRecomendationResolver();
  const record = new RecordCategoryResolver();

  // cleanup
  await cleanup();
  // exec seeding !
  await meals.seedMeals();
  await nutritient.seedNutrientCategories();
  await nutrition_guide.seedNutritionGuide();
  await healthLalbel.seedHealthLabelRefrence();
  await recipe_category.seedRecipeCategories();
  await recomendation.seedRecomendation();
  await record.seedRecordCategories();
};
