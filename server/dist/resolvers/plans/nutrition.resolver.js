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
exports.PlanNutritionResolver = void 0;
const type_graphql_1 = require("type-graphql");
const auth_mw_1 = require("../../utils/middlewares/auth.mw");
const User_1 = require("../../entity/User");
const NutrientCategory_1 = require("../../entity/Nutrition/NutrientCategory");
const responses_1 = require("../../utils/responses");
const nutrition_1 = require("../../utils/helpers/nutrition");
let PlanNutritionResolver = class PlanNutritionResolver {
    async nutritionsByCategory(ctx) {
        const user = await User_1.User.findOne({ where: { id: ctx.payload.userID } });
        if (!user) {
            return [];
        }
        const nutritions = await NutrientCategory_1.NutritienCategory.find({
            relations: ["nutrients"],
        });
        const results = [];
        for (let n of nutritions) {
            const obj = {
                category: n,
                items: await Promise.all(n.nutrients.map(async (nutrition) => ({
                    nutrition: nutrition,
                    recommendation: await (0, nutrition_1.getRecommnededAmount)(user, nutrition.code),
                }))),
            };
            results.push(obj);
        }
        return results;
    }
};
__decorate([
    (0, type_graphql_1.UseMiddleware)(auth_mw_1.isUserAuth),
    (0, type_graphql_1.Query)(() => [responses_1.NewPlanNutritionResponse]),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlanNutritionResolver.prototype, "nutritionsByCategory", null);
PlanNutritionResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], PlanNutritionResolver);
exports.PlanNutritionResolver = PlanNutritionResolver;
//# sourceMappingURL=nutrition.resolver.js.map