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
exports.GroceryResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Meals_1 = require("../../entity/Meals");
const Ingredient_1 = require("../../entity/Recipe/Ingredient");
const auth_mw_1 = require("../../utils/middlewares/auth.mw");
const User_1 = require("../../entity/User");
const merge_1 = require("../../utils/helpers/grocery/merge");
let GroceryResolver = class GroceryResolver {
    async grocery(ctx) {
        const user = await User_1.User.findOne({ where: { id: ctx.payload.userID } });
        if (!user) {
            return [];
        }
        const meals = await Meals_1.MealRecipes.find({
            where: { user: user, cooked: false },
            relations: ["recipe", "recipe.ingredients"],
        });
        const ingredients = [];
        const NOW = new Date();
        for (let meal of meals) {
            if (new Date(meal.date).toLocaleDateString() >= NOW.toLocaleDateString()) {
                console.log("ingredients: ", meal.recipe.ingredients);
                ingredients.push(...meal.recipe.ingredients);
            }
        }
        return (0, merge_1.mergeIngredients)(ingredients);
    }
    async groceryCount(ctx) {
        const user = await User_1.User.findOne({ where: { id: ctx.payload.userID } });
        if (!user)
            return 0;
        const meals = await Meals_1.MealRecipes.find({
            where: { user: user, cooked: false },
            relations: ["recipe", "recipe.ingredients"],
        });
        const ingredients = [];
        const NOW = new Date();
        for (let meal of meals) {
            if (new Date(meal.date).toLocaleDateString() >= NOW.toLocaleDateString()) {
                ingredients.push(...meal.recipe.ingredients);
            }
        }
        return (0, merge_1.mergeIngredients)(ingredients).length;
    }
};
__decorate([
    (0, type_graphql_1.UseMiddleware)(auth_mw_1.isUserAuth),
    (0, type_graphql_1.Query)(() => [Ingredient_1.Ingredient]),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GroceryResolver.prototype, "grocery", null);
__decorate([
    (0, type_graphql_1.UseMiddleware)(auth_mw_1.isUserAuth),
    (0, type_graphql_1.Query)(() => Number),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GroceryResolver.prototype, "groceryCount", null);
GroceryResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], GroceryResolver);
exports.GroceryResolver = GroceryResolver;
//# sourceMappingURL=list.resolver.js.map