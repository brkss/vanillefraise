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
exports.RecipeTotalNutritionKcal = void 0;
const typeorm_1 = require("typeorm");
const Recipe_1 = require("../Recipe");
const type_graphql_1 = require("type-graphql");
let RecipeTotalNutritionKcal = class RecipeTotalNutritionKcal extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], RecipeTotalNutritionKcal.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RecipeTotalNutritionKcal.prototype, "label", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RecipeTotalNutritionKcal.prototype, "quantity", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RecipeTotalNutritionKcal.prototype, "unit", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RecipeTotalNutritionKcal.prototype, "code", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Recipe_1.Recipe),
    (0, typeorm_1.ManyToOne)(() => Recipe_1.Recipe, recipe => recipe.totalnutritionkcal, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", Recipe_1.Recipe)
], RecipeTotalNutritionKcal.prototype, "recipe", void 0);
RecipeTotalNutritionKcal = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], RecipeTotalNutritionKcal);
exports.RecipeTotalNutritionKcal = RecipeTotalNutritionKcal;
//# sourceMappingURL=TotalNutritionKcal.js.map