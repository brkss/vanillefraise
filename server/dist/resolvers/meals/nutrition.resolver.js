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
exports.MealNutritionResolver = void 0;
const type_graphql_1 = require("type-graphql");
const auth_mw_1 = require("../../utils/middlewares/auth.mw");
const mealrecipes_input_1 = require("../../utils/inputs/meals/mealrecipes.input");
const Meals_1 = require("../../entity/Meals");
const TotalNutrition_1 = require("../../entity/Nutrition/TotalNutrition");
const typeorm_1 = require("typeorm");
const User_1 = require("../../entity/User");
const mealnutrition_response_1 = require("../../utils/responses/meals/mealnutrition.response");
let MealNutritionResolver = class MealNutritionResolver {
    async mealNutrition(data, ctx) {
        if (!data || !data.date || !data.meal) {
            return {
                status: false,
                message: "Invalid Data !",
            };
        }
        const user = await User_1.User.findOne({ where: { id: ctx.payload.userID } });
        const meal = await Meals_1.Meal.findOne({ where: { id: data.meal } });
        if (!user || !meal) {
            return {
                status: false,
                message: "Cannot find meal !",
            };
        }
        const mr = await Meals_1.MealRecipes.find({
            where: { meal: meal, date: (0, typeorm_1.Like)(`${data.date.toLocaleDateString()}`) },
            relations: ["recipe"],
        });
        let nutritions = [];
        for (let m of mr) {
            const nutrition = await TotalNutrition_1.RecipeTotalNutrition.find({
                where: { recipe: m.recipe },
            });
            nutritions.push(...nutrition);
        }
        let res = [];
        for (let n of nutritions) {
            const index = res.findIndex((x) => x.code === n.code);
            if (index == -1) {
                res.push(Object.assign({}, n));
            }
            else {
                res[index].quantity += n.quantity;
            }
        }
        return {
            status: true,
            nutrition: res.sort((a, b) => b.quantity - a.quantity).slice(0, 10),
        };
    }
};
__decorate([
    (0, type_graphql_1.UseMiddleware)(auth_mw_1.isUserAuth),
    (0, type_graphql_1.Query)(() => mealnutrition_response_1.MealNutritionResponse),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mealrecipes_input_1.MealRecipesInput, Object]),
    __metadata("design:returntype", Promise)
], MealNutritionResolver.prototype, "mealNutrition", null);
MealNutritionResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], MealNutritionResolver);
exports.MealNutritionResolver = MealNutritionResolver;
//# sourceMappingURL=nutrition.resolver.js.map