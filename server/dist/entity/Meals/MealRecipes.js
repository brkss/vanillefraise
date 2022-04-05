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
exports.MealRecipes = void 0;
const typeorm_1 = require("typeorm");
const Recipe_1 = require("../Recipe");
const Meal_1 = require("./Meal");
const type_graphql_1 = require("type-graphql");
const User_1 = require("../User");
let MealRecipes = class MealRecipes extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], MealRecipes.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Recipe_1.Recipe),
    (0, typeorm_1.ManyToOne)(() => Recipe_1.Recipe, (recipe) => recipe.mealrecipes, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", Recipe_1.Recipe)
], MealRecipes.prototype, "recipe", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Meal_1.Meal),
    (0, typeorm_1.ManyToOne)(() => Meal_1.Meal, (meal) => meal.mealrecipes, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", Meal_1.Meal)
], MealRecipes.prototype, "meal", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => User_1.User),
    (0, typeorm_1.ManyToOne)(() => User_1.User, user => user.mealrecipes, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", User_1.User)
], MealRecipes.prototype, "user", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MealRecipes.prototype, "date", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)('boolean', { default: false }),
    __metadata("design:type", Boolean)
], MealRecipes.prototype, "cooked", void 0);
MealRecipes = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], MealRecipes);
exports.MealRecipes = MealRecipes;
//# sourceMappingURL=MealRecipes.js.map