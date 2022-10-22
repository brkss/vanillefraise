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
exports.SearchRecipeResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Recipe_1 = require("../../entity/Recipe");
const TotalNutrition_1 = require("../../entity/Nutrition/TotalNutrition");
const typeorm_1 = require("typeorm");
const recipes_1 = require("../../utils/responses/recipes");
const typeorm_2 = require("typeorm");
let SearchRecipeResolver = class SearchRecipeResolver {
    async searchRecipes(query) {
        const recipes = await Recipe_1.Recipe.find({
            where: [
                { name: (0, typeorm_1.Like)(`%${query}%`) },
                { description: (0, typeorm_1.Like)(`%${query}%`) },
            ],
        });
        const ingredients = await Recipe_1.Ingredient.find({
            where: { raw: (0, typeorm_1.Like)(`%${query}%`) },
            relations: ["recipe"],
        });
        const nutritions = await TotalNutrition_1.RecipeTotalNutrition.find({
            where: { label: (0, typeorm_1.Like)(`%${query}%`), quantity: (0, typeorm_2.MoreThan)(0) },
            relations: ["recipe"],
        });
        console.log("ingredients : ", ingredients);
        return {
            ingredients: ingredients || [],
            recipes: recipes || [],
            nutritients: nutritions || [],
        };
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => recipes_1.SearchResultResponse),
    __param(0, (0, type_graphql_1.Arg)("query")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SearchRecipeResolver.prototype, "searchRecipes", null);
SearchRecipeResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], SearchRecipeResolver);
exports.SearchRecipeResolver = SearchRecipeResolver;
//# sourceMappingURL=search.resolver.js.map