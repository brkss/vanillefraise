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
exports.SearchResultResponse = void 0;
const type_graphql_1 = require("type-graphql");
const Recipe_1 = require("../../../entity/Recipe");
const Nutrition_1 = require("../../../entity/Nutrition");
let SearchResultResponse = class SearchResultResponse {
};
__decorate([
    (0, type_graphql_1.Field)(() => [Recipe_1.Recipe]),
    __metadata("design:type", Array)
], SearchResultResponse.prototype, "recipes", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Recipe_1.Ingredient]),
    __metadata("design:type", Array)
], SearchResultResponse.prototype, "ingredients", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Nutrition_1.RecipeTotalNutrition]),
    __metadata("design:type", Array)
], SearchResultResponse.prototype, "nutritients", void 0);
SearchResultResponse = __decorate([
    (0, type_graphql_1.ObjectType)()
], SearchResultResponse);
exports.SearchResultResponse = SearchResultResponse;
//# sourceMappingURL=search.response.js.map