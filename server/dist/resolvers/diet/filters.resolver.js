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
exports.FoodFilterResolver = void 0;
const type_graphql_1 = require("type-graphql");
const auth_mw_1 = require("../../utils/middlewares/auth.mw");
const Nutrition_1 = require("../../entity/Nutrition");
const User_1 = require("../../entity/User");
let FoodFilterResolver = class FoodFilterResolver {
    async activeFoodFilters(ctx) {
        const user = await User_1.User.findOne({
            where: { id: ctx.payload.userID },
            relations: ["filters", "filters.healthlabel"],
        });
        if (!user) {
            return [];
        }
        return user.filters.map((filter) => filter.healthlabel);
    }
};
__decorate([
    (0, type_graphql_1.UseMiddleware)(auth_mw_1.isUserAuth),
    (0, type_graphql_1.Query)(() => [Nutrition_1.HealthLabelRefrence]),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FoodFilterResolver.prototype, "activeFoodFilters", null);
FoodFilterResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], FoodFilterResolver);
exports.FoodFilterResolver = FoodFilterResolver;
//# sourceMappingURL=filters.resolver.js.map