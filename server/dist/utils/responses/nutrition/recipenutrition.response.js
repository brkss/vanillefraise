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
exports.RecipeNutritionResponse = void 0;
const type_graphql_1 = require("type-graphql");
const Nutrition_1 = require("../../../entity/Nutrition");
let RecipeNutritionResponse = class RecipeNutritionResponse {
};
__decorate([
    (0, type_graphql_1.Field)(() => [Nutrition_1.RecipeDietLabel], { nullable: true }),
    __metadata("design:type", Array)
], RecipeNutritionResponse.prototype, "dietLabels", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Nutrition_1.RecipeHealthLabel], { nullable: true }),
    __metadata("design:type", Array)
], RecipeNutritionResponse.prototype, "healthLabels", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Nutrition_1.RecipeTotalDaily], { nullable: true }),
    __metadata("design:type", Array)
], RecipeNutritionResponse.prototype, "totalDaily", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Nutrition_1.RecipeTotalNutrition], { nullable: true }),
    __metadata("design:type", Array)
], RecipeNutritionResponse.prototype, "totalNutrition", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Nutrition_1.RecipeTotalNutritionKcal], { nullable: true }),
    __metadata("design:type", Array)
], RecipeNutritionResponse.prototype, "totalNutritionKcal", void 0);
RecipeNutritionResponse = __decorate([
    (0, type_graphql_1.ObjectType)()
], RecipeNutritionResponse);
exports.RecipeNutritionResponse = RecipeNutritionResponse;
//# sourceMappingURL=recipenutrition.response.js.map