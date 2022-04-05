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
exports.RecipesListResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Recipe_1 = require("../../entity/Recipe");
let RecipesListResolver = class RecipesListResolver {
    async recipes() {
        return await Recipe_1.Recipe.find();
    }
    async recipeByCategory(cat_id) {
        if (!cat_id) {
            return [];
        }
        const category = await Recipe_1.RecipeCategory.findOne({
            relations: ["recipes"],
            where: { id: cat_id },
        });
        return (category === null || category === void 0 ? void 0 : category.recipes) || [];
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [Recipe_1.Recipe]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RecipesListResolver.prototype, "recipes", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Recipe_1.Recipe]),
    __param(0, (0, type_graphql_1.Arg)("cat_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RecipesListResolver.prototype, "recipeByCategory", null);
RecipesListResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], RecipesListResolver);
exports.RecipesListResolver = RecipesListResolver;
//# sourceMappingURL=list.resolver.js.map