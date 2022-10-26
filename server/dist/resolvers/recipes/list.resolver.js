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
exports.RecipesListResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Recipe_1 = require("../../entity/Recipe");
const middlewares_1 = require("../../utils/middlewares");
const User_1 = require("../../entity/User");
const FilterRecipes_1 = require("../../utils/helpers/FilterRecipes");
const recipes_1 = require("../../utils/inputs/recipes");
const random_1 = require("../../utils/helpers/random");
let RecipesListResolver = class RecipesListResolver {
    async recipes() {
        return await Recipe_1.Recipe.find({ where: { public: true } });
    }
    async recipeByCategory(data, ctx) {
        if (!data || !data.batch || !data.cat_id || !data.seed) {
            return [];
        }
        try {
            const step = 10;
            const user = await User_1.User.findOne({ where: { id: ctx.payload.userID } });
            if (!user)
                return [];
            let category;
            if (data.cat_id == "NO")
                category = (await Recipe_1.RecipeCategory.find({
                    relations: ["recipes", "recipes.healthlabel"],
                }))[0];
            else
                category = await Recipe_1.RecipeCategory.findOne({
                    where: { id: data.cat_id },
                    relations: ["recipes", "recipes.healthlabel"],
                });
            if (!category) {
                return [];
            }
            const recipes = category.recipes.filter((r) => r.public === true);
            const results = await (0, FilterRecipes_1.filterRecipes)(recipes, user);
            console.log("get recipes ! ");
            return results
                .sort((_) => (0, random_1.random)(data.seed) - 0.5)
                .slice(step * data.batch - step, step * data.batch);
        }
        catch (e) {
            console.log("Sonething went wrong : ", e);
            return [];
        }
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [Recipe_1.Recipe]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RecipesListResolver.prototype, "recipes", null);
__decorate([
    (0, type_graphql_1.UseMiddleware)(middlewares_1.isUserAuth),
    (0, type_graphql_1.Query)(() => [Recipe_1.Recipe]),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [recipes_1.RecipeByCategoryInput, Object]),
    __metadata("design:returntype", Promise)
], RecipesListResolver.prototype, "recipeByCategory", null);
RecipesListResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], RecipesListResolver);
exports.RecipesListResolver = RecipesListResolver;
//# sourceMappingURL=list.resolver.js.map