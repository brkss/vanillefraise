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
exports.MealRecipeResolver = void 0;
const type_graphql_1 = require("type-graphql");
const middlewares_1 = require("../../utils/middlewares");
const responses_1 = require("../../utils/responses");
const User_1 = require("../../entity/User");
const Meals_1 = require("../../entity/Meals");
const meals_1 = require("../../utils/inputs/meals");
let MealRecipeResolver = class MealRecipeResolver {
    async removeRecipe(data, ctx) {
        if (!data.mealid || !data.recipeid)
            return {
                status: false,
                message: "Invalid Data !",
            };
        const user = await User_1.User.findOne({ where: { id: ctx.payload.userID } });
        if (!user)
            return {
                status: false,
                message: "Invalid User !",
            };
        const mealRecipe = await Meals_1.MealRecipes.findOne({
            where: { id: data.mealid, user: user },
        });
        if (!mealRecipe)
            return {
                status: false,
                message: "Invalid Recipe !",
            };
        await mealRecipe.remove();
        return {
            status: true,
            message: "Recipe Removed Successfuly !",
        };
    }
};
__decorate([
    (0, type_graphql_1.UseMiddleware)(middlewares_1.isUserAuth),
    (0, type_graphql_1.Mutation)(() => responses_1.DefaultResponse),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [meals_1.RemoveMealRecipeInput, Object]),
    __metadata("design:returntype", Promise)
], MealRecipeResolver.prototype, "removeRecipe", null);
MealRecipeResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], MealRecipeResolver);
exports.MealRecipeResolver = MealRecipeResolver;
//# sourceMappingURL=recipe.resolver.js.map