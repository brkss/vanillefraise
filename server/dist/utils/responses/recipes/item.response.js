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
exports.RecipeItemResponse = exports.TranslatedIngredient = void 0;
const type_graphql_1 = require("type-graphql");
const Recipe_1 = require("../../../entity/Recipe");
const Ingredient_1 = require("../../../entity/Recipe/Ingredient");
let IngredientLang = class IngredientLang {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], IngredientLang.prototype, "unit", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], IngredientLang.prototype, "ingredient", void 0);
IngredientLang = __decorate([
    (0, type_graphql_1.ObjectType)()
], IngredientLang);
let TranslatedIngredient = class TranslatedIngredient extends Ingredient_1.Ingredient {
};
__decorate([
    (0, type_graphql_1.Field)(() => IngredientLang),
    __metadata("design:type", IngredientLang)
], TranslatedIngredient.prototype, "es", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => IngredientLang),
    __metadata("design:type", IngredientLang)
], TranslatedIngredient.prototype, "ar", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => IngredientLang),
    __metadata("design:type", IngredientLang)
], TranslatedIngredient.prototype, "fr", void 0);
TranslatedIngredient = __decorate([
    (0, type_graphql_1.ObjectType)()
], TranslatedIngredient);
exports.TranslatedIngredient = TranslatedIngredient;
let RecipeItemResponse = class RecipeItemResponse {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Boolean)
], RecipeItemResponse.prototype, "status", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], RecipeItemResponse.prototype, "message", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Recipe_1.Recipe)
], RecipeItemResponse.prototype, "recipe", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [TranslatedIngredient], { nullable: true }),
    __metadata("design:type", Array)
], RecipeItemResponse.prototype, "ingredients", void 0);
RecipeItemResponse = __decorate([
    (0, type_graphql_1.ObjectType)()
], RecipeItemResponse);
exports.RecipeItemResponse = RecipeItemResponse;
//# sourceMappingURL=item.response.js.map