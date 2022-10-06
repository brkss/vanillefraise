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
exports.ListMealsResolver = void 0;
const middlewares_1 = require("../../utils/middlewares");
const type_graphql_1 = require("type-graphql");
const Meals_1 = require("../../entity/Meals");
const meals_1 = require("../../utils/inputs/meals");
const meals_2 = require("../../utils/responses/meals");
const User_1 = require("../../entity/User");
const typeorm_1 = require("typeorm");
let ListMealsResolver = class ListMealsResolver {
    async meals(ctx) {
        const user = await User_1.User.findOne({ where: { id: ctx.payload.userID } });
        if (!user)
            return [];
        const date = new Date();
        const meals = await Meals_1.Meal.find();
        const meal_recipes = await Meals_1.MealRecipes.find({
            where: {
                user: user,
                date: (0, typeorm_1.Like)(`%${date.toLocaleDateString()}%`),
            },
            relations: ["recipe", "meal"],
        });
        const meals_result = meals.map((meal) => ({
            id: meal.id,
            name: meal.name,
            index: meal.index,
            count: meal_recipes.filter((mr) => mr.meal.id == meal.id).length,
        }));
        return meals_result;
    }
    async daysWithRecipes(mealID, ctx) {
        const user = await User_1.User.findOne({ where: { id: ctx.payload.userID } });
        if (!user || !mealID) {
            return {
                status: false,
                message: "Invalid Data !",
            };
        }
        const mr = await (0, typeorm_1.getRepository)(Meals_1.MealRecipes)
            .createQueryBuilder("meal_recipes")
            .select("meal_recipes.date", "date")
            .addSelect("COUNT(meal_recipes.id)", "count")
            .where("meal_recipes.userId = :userID", { userID: user.id })
            .andWhere("meal_recipes.mealId = :mealID", { mealID: mealID })
            .groupBy("meal_recipes.date")
            .getRawMany();
        return {
            status: true,
            markedDates: mr,
        };
    }
    async getMealRecipes(data, ctx) {
        var _a;
        const user = await User_1.User.findOne({ where: { id: ctx.payload.userID } });
        if (!user || !data.date || !data.meal) {
            return {
                status: false,
                message: "Invalid Data !",
            };
        }
        const meal = await Meals_1.Meal.findOne({ where: { id: data.meal } });
        if (!meal) {
            return {
                status: false,
                message: "Invalid Meal !",
            };
        }
        const mr = await Meals_1.MealRecipes.find({
            where: {
                user: user,
                meal: meal,
                date: (0, typeorm_1.Like)(`%${data.date.toLocaleDateString()}%`),
            },
            relations: ["recipe", "recipe.ingredients", "recipe.totalnutrition"],
        });
        const mri = mr.map((mealrecipe) => mealrecipe.id);
        const recipes = mr.map((mealrecipe) => mealrecipe.recipe);
        let cal = 0;
        let total = 0;
        for (let recipe of recipes) {
            cal +=
                ((_a = recipe.totalnutrition.find((x) => x.code == "ENERC_KCAL")) === null || _a === void 0 ? void 0 : _a.quantity) ||
                    0;
            total += parseInt(recipe.total || "0") || 0;
        }
        const ingredients_data = recipes.map((recipe) => recipe.ingredients);
        let ingredients = [];
        for (let chunk of ingredients_data) {
            for (let ingredient of chunk) {
                ingredients.push(ingredient);
            }
        }
        const cooked = await this.checkIfCooked(user, mri);
        return {
            status: true,
            message: `DATE : ${data.date.toLocaleDateString()}`,
            mealrecipes: mr,
            recipes: recipes,
            ingredients: ingredients,
            time: total,
            calories: cal,
            cooked: cooked.status,
        };
    }
    async checkIfCooked(user, mealRecipesID) {
        if (!user || !mealRecipesID || mealRecipesID.length == 0) {
            return {
                status: false,
                message: "Invalid Data !",
            };
        }
        let count = 0;
        for (let mri of mealRecipesID) {
            let mr = await Meals_1.MealRecipes.findOne({ where: { id: mri, user: user } });
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
};
__decorate([
    (0, type_graphql_1.UseMiddleware)(middlewares_1.isUserAuth),
    (0, type_graphql_1.Query)(() => [meals_2.MealListResponse]),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ListMealsResolver.prototype, "meals", null);
__decorate([
    (0, type_graphql_1.UseMiddleware)(middlewares_1.isUserAuth),
    (0, type_graphql_1.Query)(() => meals_2.MarkedDaysResponse),
    __param(0, (0, type_graphql_1.Arg)("mealID")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ListMealsResolver.prototype, "daysWithRecipes", null);
__decorate([
    (0, type_graphql_1.UseMiddleware)(middlewares_1.isUserAuth),
    (0, type_graphql_1.Query)(() => meals_2.MealRecipeResponse),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [meals_1.MealRecipesInput, Object]),
    __metadata("design:returntype", Promise)
], ListMealsResolver.prototype, "getMealRecipes", null);
ListMealsResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], ListMealsResolver);
exports.ListMealsResolver = ListMealsResolver;
//# sourceMappingURL=list.resolver.js.map