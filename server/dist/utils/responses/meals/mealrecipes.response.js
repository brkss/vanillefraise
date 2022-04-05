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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealRecipeResponse = void 0;
const type_graphql_1 = require("type-graphql");
const Meals_1 = require("../../../entity/Meals");
const Recipe_1 = require("../../../entity/Recipe");
let MealRecipeResponse = class MealRecipeResponse {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Boolean)
], MealRecipeResponse.prototype, "status", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], MealRecipeResponse.prototype, "message", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Recipe_1.Recipe], { nullable: true }),
    __metadata("design:type", Array)
], MealRecipeResponse.prototype, "recipes", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Recipe_1.Ingredient], { nullable: true }),
    __metadata("design:type", Array)
], MealRecipeResponse.prototype, "ingredients", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Meals_1.MealRecipes], { nullable: true }),
    __metadata("design:type", Array)
], MealRecipeResponse.prototype, "mealrecipes", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], MealRecipeResponse.prototype, "time", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], MealRecipeResponse.prototype, "calories", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Boolean)
], MealRecipeResponse.prototype, "cooked", void 0);
MealRecipeResponse = __decorate([
    (0, type_graphql_1.ObjectType)()
], MealRecipeResponse);
exports.MealRecipeResponse = MealRecipeResponse;
//# sourceMappingURL=mealrecipes.response.js.map