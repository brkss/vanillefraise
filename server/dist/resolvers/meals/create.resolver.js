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
exports.CreateMealsResolver = void 0;
const responses_1 = require("../../utils/responses");
const type_graphql_1 = require("type-graphql");
const Meals_1 = require("../../entity/Meals");
const meals_1 = require("../../utils/inputs/meals");
const Recipe_1 = require("../../entity/Recipe");
const middlewares_1 = require("../../utils/middlewares");
const User_1 = require("../../entity/User");
const meals_data = [
    {
        name: "Breakfast",
        index: 1,
    },
    {
        name: "Lunch",
        index: 2,
    },
    {
        name: "Dinner",
        index: 3,
    },
];
let CreateMealsResolver = class CreateMealsResolver {
    async seedMeals() {
        const meals = await Meals_1.Meal.find();
        if (meals.length == 0) {
            for (let m of meals_data) {
                const meal = new Meals_1.Meal();
                meal.name = m.name;
                meal.index = m.index;
                await meal.save();
            }
            return true;
        }
        return false;
    }
    async addMealRecipe(data, ctx) {
        var _a;
        if (!data || !data.mealID || !data.recipeID) {
            return {
                status: false,
                message: "Invalid Data !",
            };
        }
        const meal = await Meals_1.Meal.findOne({ where: { id: data.mealID } });
        const recipe = await Recipe_1.Recipe.findOne({ where: { id: data.recipeID } });
        const user = await User_1.User.findOne({
            id: ctx.payload.userID,
        });
        if (!meal || !recipe || !user) {
            return {
                status: false,
                message: "Something went wrong : invalid Meal or Recipe",
            };
        }
        try {
            const mr = new Meals_1.MealRecipes();
            mr.recipe = recipe;
            mr.meal = meal;
            mr.date = ((_a = data.date) === null || _a === void 0 ? void 0 : _a.toLocaleDateString()) || new Date().toLocaleDateString();
            mr.user = user;
            await mr.save();
        }
        catch (e) {
            console.log("Something went wrong !", e);
            return {
                status: false,
                message: "Something went wrong !",
            };
        }
        return {
            status: true,
            message: `Recipe add successfuly to ${meal.name}`,
        };
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CreateMealsResolver.prototype, "seedMeals", null);
__decorate([
    (0, type_graphql_1.UseMiddleware)(middlewares_1.isUserAuth),
    (0, type_graphql_1.Mutation)(() => responses_1.DefaultResponse),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [meals_1.AddMealRecipeInput, Object]),
    __metadata("design:returntype", Promise)
], CreateMealsResolver.prototype, "addMealRecipe", null);
CreateMealsResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], CreateMealsResolver);
exports.CreateMealsResolver = CreateMealsResolver;
//# sourceMappingURL=create.resolver.js.map