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
exports.MealNutritionResponse = void 0;
const type_graphql_1 = require("type-graphql");
const TotalNutrition_1 = require("../../../entity/Nutrition/TotalNutrition");
let MealNutritionResponse = class MealNutritionResponse {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Boolean)
], MealNutritionResponse.prototype, "status", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], MealNutritionResponse.prototype, "message", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [TotalNutrition_1.RecipeTotalNutrition], { nullable: true }),
    __metadata("design:type", Array)
], MealNutritionResponse.prototype, "nutrition", void 0);
MealNutritionResponse = __decorate([
    (0, type_graphql_1.ObjectType)()
], MealNutritionResponse);
exports.MealNutritionResponse = MealNutritionResponse;
//# sourceMappingURL=mealnutrition.response.js.map