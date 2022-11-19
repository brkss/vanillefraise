"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.build = void 0;
const type_graphql_1 = require("type-graphql");
const resolvers_1 = require("../resolvers");
const build = async () => {
    return await (0, type_graphql_1.buildSchema)({
        resolvers: [
            resolvers_1.UserResolver,
            resolvers_1.SecurityResolver,
            resolvers_1.CreateRecipeResolver,
            resolvers_1.RecipesListResolver,
            resolvers_1.RecipeCategoryResolver,
            resolvers_1.SpecialConditionResolver,
            resolvers_1.DeleteRecipeResolver,
            resolvers_1.RecipeItemResolver,
            resolvers_1.RecordCategoryResolver,
            resolvers_1.CreateRecordResolver,
            resolvers_1.RecordListResolver,
            resolvers_1.MoodResolver,
            resolvers_1.UserInfoResolver,
            resolvers_1.NutritionGuideResolver,
            resolvers_1.RecipeNutritionResolver,
            resolvers_1.MoodOverviewResolver,
            resolvers_1.CookedRecipeResolver,
            resolvers_1.NutritionOverviewResolver,
            resolvers_1.SeedNutritionRecomendationResolver,
            resolvers_1.RequestEarlyAccessResolver,
            resolvers_1.UserPasswordResolver,
            resolvers_1.CreateMealsResolver,
            resolvers_1.ListMealsResolver,
            resolvers_1.SearchRecipeResolver,
            resolvers_1.MealRecipeResolver,
            resolvers_1.AdminAuthResolver,
            resolvers_1.AdminRecipeCategoryResolver,
            resolvers_1.AdminUserResolver,
            resolvers_1.AdminRecipeResolver,
            resolvers_1.MealNutritionResolver,
            resolvers_1.HealthLabelsResolver,
            resolvers_1.DietDataResolver,
            resolvers_1.DietConfigResolver,
            resolvers_1.FoodFilterResolver,
            resolvers_1.MacrosResolver,
            resolvers_1.DietRecordResolver,
            resolvers_1.TranlatingResolver,
            resolvers_1.NutrientCategoryResolver,
            resolvers_1.NutritionIntakeResolver,
            resolvers_1.RecomendedRecipesResolver,
            resolvers_1.NutrionIntakeChartResolver,
            resolvers_1.PlansListResolver,
            resolvers_1.ReportRecipeResolver,
            resolvers_1.GroceryResolver,
            resolvers_1.PlanNutritionResolver,
        ],
        validate: false,
        dateScalarMode: "isoDate",
    });
};
exports.build = build;
//# sourceMappingURL=build.js.map