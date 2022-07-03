"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
const resolvers_1 = require("../resolvers");
const seed = async () => {
    const meals = new resolvers_1.CreateMealsResolver();
    const activity = new resolvers_1.ActivityCaloriesResolver();
    const activity_category = new resolvers_1.ActivityCategoryResolver();
    const mood = new resolvers_1.MoodResolver();
    const nutritient = new resolvers_1.NutrientCategoryResolver();
    const nutrition_guide = new resolvers_1.NutritionGuideResolver();
    const healthLalbel = new resolvers_1.HealthLabelsResolver();
    const recipe_category = new resolvers_1.RecipeCategoryResolver();
    const recomendation = new resolvers_1.SeedNutritionRecomendationResolver();
    const record = new resolvers_1.RecordCategoryResolver();
    await meals.seedMeals();
    await activity.seedActivityCalories();
    await activity_category.seedActivityCategories();
    await mood.seedMoodCategories();
    await nutritient.seedNutrientCategories();
    await nutrition_guide.seedNutritionGuide();
    await healthLalbel.seedHealthLabelRefrence();
    await recipe_category.seedRecipeCategories();
    await recomendation.seedRecomendation();
    await record.seedRecordCategories();
};
exports.seed = seed;
//# sourceMappingURL=seed.js.map