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
exports.RecipeCategoryResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Recipe_1 = require("../../entity/Recipe");
const recipe_categories_1 = require("../../utils/data/recipe_categories");
const middlewares_1 = require("../../utils/middlewares");
const recipes_1 = require("../../utils/inputs/recipes");
const recipes_2 = require("../../utils/responses/recipes");
let RecipeCategoryResolver = class RecipeCategoryResolver {
    async recipeCategories() {
        return await Recipe_1.RecipeCategory.find({
            where: { active: true },
            relations: ["recipes"],
        });
    }
    async seedRecipeCategories() {
        const categories = await Recipe_1.RecipeCategory.find();
        if (categories.length == 0) {
            for (let c of recipe_categories_1.recipe_categories) {
                const category = new Recipe_1.RecipeCategory();
                category.name = c.name;
                category.icon = c.icon;
                await category.save();
            }
            return true;
        }
        return false;
    }
    async createRecipeCategory(data) {
        if (!data.name || !data.icon) {
            return {
                status: false,
                message: "Invalid Data !",
            };
        }
        try {
            const category = new Recipe_1.RecipeCategory();
            category.name = data.name;
            category.icon = data.icon;
            await category.save();
            return {
                status: true,
                message: "Category Created Successfuly !",
                category: category
            };
        }
        catch (e) {
            console.log("Something went wrong : ", e);
            return {
                status: false,
                message: "Something went wrong !",
            };
        }
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [Recipe_1.RecipeCategory]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RecipeCategoryResolver.prototype, "recipeCategories", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RecipeCategoryResolver.prototype, "seedRecipeCategories", null);
__decorate([
    (0, type_graphql_1.UseMiddleware)(middlewares_1.isAdminAuth),
    (0, type_graphql_1.Mutation)(() => recipes_2.CreateRecipeCategoryResponse),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [recipes_1.CreateRecipeCategoryInput]),
    __metadata("design:returntype", Promise)
], RecipeCategoryResolver.prototype, "createRecipeCategory", null);
RecipeCategoryResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], RecipeCategoryResolver);
exports.RecipeCategoryResolver = RecipeCategoryResolver;
//# sourceMappingURL=category.resolver.js.map