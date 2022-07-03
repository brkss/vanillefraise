import { CreateMealsResolver, ActivityCaloriesResolver, ActivityCategoryResolver, MoodResolver, NutrientCategoryResolver, NutritionGuideResolver, HealthLabelsResolver, RecipeCategoryResolver, SeedNutritionRecomendationResolver, RecordCategoryResolver} from '../resolvers';




export const seed = async () => {

	const meals = new CreateMealsResolver();
	const activity = new ActivityCaloriesResolver();
	const activity_category = new ActivityCategoryResolver();
	const mood = new MoodResolver();
	const nutritient = new NutrientCategoryResolver();
	const nutrition_guide = new NutritionGuideResolver();
	const healthLalbel = new HealthLabelsResolver();
	const recipe_category = new RecipeCategoryResolver();
	const recomendation = new SeedNutritionRecomendationResolver();
	const record = new RecordCategoryResolver();

	// exec 
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
}
