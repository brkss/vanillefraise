"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeNutritionResolver = void 0;
const type_graphql_1 = require("type-graphql");
const nutrition_1 = require("../../utils/responses/nutrition");
const Nutrition_1 = require("../../entity/Nutrition");
const Recipe_1 = require("../../entity/Recipe");
let RecipeNutritionResolver = class RecipeNutritionResolver {
    async recipeEnergy(recipe_id) {
        if (!recipe_id)
            return -1;
        const recipe = await Recipe_1.Recipe.findOne({ where: { id: recipe_id } });
        if (!recipe)
            return -1;
        const nutrition = await Nutrition_1.RecipeTotalNutrition.findOne({
            where: { recipe: recipe, code: "ENERC_KCAL" },
        });
        if (!nutrition)
            return -1;
        return nutrition.quantity;
    }
    async getRecipeNutrition(recipe_id) {
        const res = {
            dietLabels: [],
            healthLabels: [],
            totalDaily: [],
            totalNutrition: [],
            totalNutritionKcal: [],
        };
        const recipe = await Recipe_1.Recipe.findOne({ where: { id: recipe_id } });
        if (!recipe)
            return res;
        res.dietLabels = await Nutrition_1.RecipeDietLabel.find({ where: { recipe: recipe } });
        res.healthLabels = await Nutrition_1.RecipeHealthLabel.find({
            where: { recipe: recipe },
        });
        res.totalDaily = await Nutrition_1.RecipeTotalDaily.find({ where: { recipe: recipe } });
        res.totalNutrition = await Nutrition_1.RecipeTotalNutrition.find({
            where: { recipe: recipe },
        });
        res.totalNutritionKcal = await Nutrition_1.RecipeTotalNutritionKcal.find({
            where: { recipe: recipe },
        });
        return res;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => Number),
    __param(0, (0, type_graphql_1.Arg)("recipe_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RecipeNutritionResolver.prototype, "recipeEnergy", null);
__decorate([
    (0, type_graphql_1.Query)(() => nutrition_1.RecipeNutritionResponse),
    __param(0, (0, type_graphql_1.Arg)("recipe_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RecipeNutritionResolver.prototype, "getRecipeNutrition", null);
RecipeNutritionResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], RecipeNutritionResolver);
exports.RecipeNutritionResolver = RecipeNutritionResolver;
//# sourceMappingURL=recipe.resolver.js.map