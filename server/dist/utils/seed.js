"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
const resolvers_1 = require("../resolvers");
const Nutrition_1 = require("../entity/Nutrition/Nutrition");
const cleanup = async () => {
    const nutrions = await Nutrition_1.Nutrition.find();
    for (let i = 0; i < nutrions.length; i++) {
        for (let j = i; j < nutrions.length; j++) {
            if (nutrions[i].id !== nutrions[j].id &&
                nutrions[i].code === nutrions[j].code) {
                await Nutrition_1.Nutrition.remove(nutrions[j]);
                nutrions.splice(j, 1);
            }
        }
    }
};
const seed = async () => {
    const meals = new resolvers_1.CreateMealsResolver();
    const mood = new resolvers_1.MoodResolver();
    const nutritient = new resolvers_1.NutrientCategoryResolver();
    const nutrition_guide = new resolvers_1.NutritionGuideResolver();
    const healthLalbel = new resolvers_1.HealthLabelsResolver();
    const recipe_category = new resolvers_1.RecipeCategoryResolver();
    const recomendation = new resolvers_1.SeedNutritionRecomendationResolver();
    const record = new resolvers_1.RecordCategoryResolver();
    await cleanup();
    await meals.seedMeals();
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