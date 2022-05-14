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
exports.CookedRecipeResolver = void 0;
const type_graphql_1 = require("type-graphql");
const UserInfo_1 = require("../../entity/UserInfo");
const User_1 = require("../../entity/User");
const Recipe_1 = require("../../entity/Recipe");
const middlewares_1 = require("../../utils/middlewares");
const MealRecipes_1 = require("../../entity/Meals/MealRecipes");
const inputs_1 = require("../../utils/inputs");
const responses_1 = require("../../utils/responses");
let CookedRecipeResolver = class CookedRecipeResolver {
    async checkCookedMeal(mealRecipesID, ctx) {
        const user = await User_1.User.findOne({ where: { id: ctx.payload.userID } });
        if (!user || !mealRecipesID || mealRecipesID.length == 0) {
            return {
                status: false,
                message: "Invalid Data !",
            };
        }
        let count = 0;
        for (let mri of mealRecipesID) {
            let mr = await MealRecipes_1.MealRecipes.findOne({ where: { id: mri } });
            if (!mr) {
                return {
                    status: false,
                };
            }
            if (mr.cooked)
                count++;
        }
        if (count == mealRecipesID.length)
            return {
                status: true,
            };
        return {
            status: false,
        };
    }
    async cookedRecipe(data, ctx) {
        var _a;
        if (!data.recipeId || !data.mealId) {
            return {
                status: false,
                message: "Invalid Recipe or Meal !",
            };
        }
        try {
            const user = await User_1.User.findOne({ where: { id: ctx.payload.userID } });
            const recipe = await Recipe_1.Recipe.findOne({
                where: { id: data.recipeId },
                relations: ["recipe_total_nutrition"],
            });
            if (!user || !recipe) {
                return {
                    status: false,
                    message: "Invalid Recipe !",
                };
            }
            const cookedRecipe = new UserInfo_1.CookedRecipe();
            cookedRecipe.recipe = recipe;
            cookedRecipe.user = user;
            await cookedRecipe.save();
            const mealRecipe = await MealRecipes_1.MealRecipes.findOne({
                where: { id: data.mealId },
            });
            if (!mealRecipe) {
                return {
                    status: false,
                    message: "Invalid Meal !",
                };
            }
            mealRecipe.cooked = true;
            await mealRecipe.save();
            return {
                status: true,
                message: "Recipe flaged as cooked !",
                calories: ((_a = recipe.totalnutrition.find((x) => x.code == "ENERC_KCAL")) === null || _a === void 0 ? void 0 : _a.quantity) ||
                    0,
            };
        }
        catch (e) {
            console.log("Something went wrong trying to flag recipe as cooked => ", e);
            return {
                status: false,
                message: "Something went wrong !",
            };
        }
    }
    async cookedRecipes(mealRecipesID, ctx) {
        var _a;
        if (!mealRecipesID || mealRecipesID.length == 0) {
            return {
                status: false,
                message: "Invalid Data !",
            };
        }
        const user = await User_1.User.findOne({ where: { id: ctx.payload.userID } });
        if (!user) {
            return {
                status: false,
                message: "Invalid User !",
            };
        }
        let cals = 0;
        for (let mealRecipeId of mealRecipesID) {
            const mr = await MealRecipes_1.MealRecipes.findOne({
                where: { id: mealRecipeId },
                relations: ["recipe", "recipe.totalnutrition"],
            });
            if (mr && !mr.cooked) {
                const cr = new UserInfo_1.CookedRecipe();
                cr.recipe = mr.recipe;
                cr.user = user;
                cr.created_at = new Date(mr.date);
                mr.cooked = true;
                await mr.save();
                await cr.save();
                cals +=
                    ((_a = mr.recipe.totalnutrition.find((x) => x.label == "ENERC_KCAL")) === null || _a === void 0 ? void 0 : _a.quantity) || 0;
            }
        }
        return {
            status: true,
            message: "Recipes Marked successfuly !",
            calories: cals,
        };
    }
    async cookedRecipesCount(ctx) {
        const user = await User_1.User.findOne({ where: { id: ctx.payload.userID } });
        const count = await UserInfo_1.CookedRecipe.count({ where: { user: user } });
        return count;
    }
};
__decorate([
    (0, type_graphql_1.UseMiddleware)(middlewares_1.isUserAuth),
    (0, type_graphql_1.Mutation)(() => responses_1.CookedRecipesResponse),
    __param(0, (0, type_graphql_1.Arg)("mealRecipesID", () => [String])),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], CookedRecipeResolver.prototype, "checkCookedMeal", null);
__decorate([
    (0, type_graphql_1.UseMiddleware)(middlewares_1.isUserAuth),
    (0, type_graphql_1.Mutation)(() => responses_1.CookedRecipesResponse),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inputs_1.CookedRecipeInput, Object]),
    __metadata("design:returntype", Promise)
], CookedRecipeResolver.prototype, "cookedRecipe", null);
__decorate([
    (0, type_graphql_1.UseMiddleware)(middlewares_1.isUserAuth),
    (0, type_graphql_1.Mutation)(() => responses_1.CookedRecipesResponse),
    __param(0, (0, type_graphql_1.Arg)("mealRecipesID", () => [String])),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], CookedRecipeResolver.prototype, "cookedRecipes", null);
__decorate([
    (0, type_graphql_1.UseMiddleware)(middlewares_1.isUserAuth),
    (0, type_graphql_1.Query)(() => Number),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CookedRecipeResolver.prototype, "cookedRecipesCount", null);
CookedRecipeResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], CookedRecipeResolver);
exports.CookedRecipeResolver = CookedRecipeResolver;
//# sourceMappingURL=cooked.resolver.js.map