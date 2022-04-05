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
exports.Recipe = void 0;
const typeorm_1 = require("typeorm");
const Instuction_1 = require("./Instuction");
const Ingredient_1 = require("./Ingredient");
const type_graphql_1 = require("type-graphql");
const Category_1 = require("./Category");
const Nutrition_1 = require("../Nutrition");
const UserInfo_1 = require("../UserInfo");
const MealRecipes_1 = require("../Meals/MealRecipes");
let Recipe = class Recipe extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Recipe.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Recipe.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)("text", { nullable: true }),
    __metadata("design:type", String)
], Recipe.prototype, "description", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Recipe.prototype, "serving", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Recipe.prototype, "image", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Recipe.prototype, "cook", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Recipe.prototype, "prep", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Recipe.prototype, "total", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Recipe.prototype, "url", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Recipe.prototype, "public", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Recipe.prototype, "created_at", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Ingredient_1.Ingredient]),
    (0, typeorm_1.OneToMany)(() => Ingredient_1.Ingredient, (ingredients) => ingredients.recipe, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", Array)
], Recipe.prototype, "ingredients", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Instuction_1.Instruction]),
    (0, typeorm_1.OneToMany)(() => Instuction_1.Instruction, (instructions) => instructions.recipe, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", Instuction_1.Instruction)
], Recipe.prototype, "instructions", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Nutrition_1.RecipeDietLabel]),
    (0, typeorm_1.OneToMany)(() => Nutrition_1.RecipeDietLabel, (dietl) => dietl.recipe),
    __metadata("design:type", Array)
], Recipe.prototype, "dietlabel", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Nutrition_1.RecipeHealthLabel]),
    (0, typeorm_1.OneToMany)(() => Nutrition_1.RecipeHealthLabel, (healthlabel) => healthlabel.recipe),
    __metadata("design:type", Array)
], Recipe.prototype, "healthlabel", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Nutrition_1.RecipeTotalDaily]),
    (0, typeorm_1.OneToMany)(() => Nutrition_1.RecipeTotalDaily, (totaldaily) => totaldaily.recipe),
    __metadata("design:type", Array)
], Recipe.prototype, "totalDaily", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Nutrition_1.RecipeTotalNutrition]),
    (0, typeorm_1.OneToMany)(() => Nutrition_1.RecipeTotalNutrition, (totalnutrition) => totalnutrition.recipe),
    __metadata("design:type", Array)
], Recipe.prototype, "totalnutrition", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Nutrition_1.RecipeTotalNutritionKcal]),
    (0, typeorm_1.OneToMany)(() => Nutrition_1.RecipeTotalNutritionKcal, (totalnutritionkcal) => totalnutritionkcal.recipe),
    __metadata("design:type", Array)
], Recipe.prototype, "totalnutritionkcal", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [UserInfo_1.CookedRecipe]),
    (0, typeorm_1.OneToMany)(() => UserInfo_1.CookedRecipe, cookedrecipe => cookedrecipe),
    __metadata("design:type", Array)
], Recipe.prototype, "cookedrecipes", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [MealRecipes_1.MealRecipes]),
    (0, typeorm_1.OneToMany)(() => MealRecipes_1.MealRecipes, mealrecipes => mealrecipes.recipe),
    __metadata("design:type", Array)
], Recipe.prototype, "mealrecipes", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Category_1.RecipeCategory]),
    (0, typeorm_1.ManyToMany)(() => Category_1.RecipeCategory, (categories) => categories.recipes),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Recipe.prototype, "categories", void 0);
Recipe = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)("recipes")
], Recipe);
exports.Recipe = Recipe;
//# sourceMappingURL=Recipe.js.map