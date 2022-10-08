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
exports.NutrionIntakeChartResolver = void 0;
const type_graphql_1 = require("type-graphql");
const middlewares_1 = require("../../utils/middlewares");
const User_1 = require("../../entity/User");
const nutrition_1 = require("../../utils/responses/nutrition");
const UserInfo_1 = require("../../entity/UserInfo");
const helpers_1 = require("../../utils/helpers");
let NutrionIntakeChartResolver = class NutrionIntakeChartResolver {
    async nutritionIntakeChart(code, ctx) {
        var _a;
        if (!code)
            return [];
        const user = await User_1.User.findOne({ where: { id: ctx.payload.userID } });
        if (!user)
            return [];
        const cooked = await UserInfo_1.CookedRecipe.find({
            where: { user: user },
            relations: ["recipe", "recipe.totalnutrition"],
            order: { created_at: "ASC" },
        });
        const data = [];
        for (let cookedRecipe of cooked) {
            const intake = ((_a = cookedRecipe.recipe.totalnutrition.find((x) => x.code === code)) === null || _a === void 0 ? void 0 : _a.quantity) || 0;
            let obj;
            obj = {
                intake: intake,
                date: cookedRecipe.created_at.toString(),
            };
            data.push(obj);
        }
        const results = (0, helpers_1.mergeDates)(data);
        return results.reverse().slice(0, 7);
    }
};
__decorate([
    (0, type_graphql_1.UseMiddleware)(middlewares_1.isUserAuth),
    (0, type_graphql_1.Query)(() => [nutrition_1.NutritionIntakeChartResponse]),
    __param(0, (0, type_graphql_1.Arg)("code")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], NutrionIntakeChartResolver.prototype, "nutritionIntakeChart", null);
NutrionIntakeChartResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], NutrionIntakeChartResolver);
exports.NutrionIntakeChartResolver = NutrionIntakeChartResolver;
//# sourceMappingURL=chart.resolver.js.map