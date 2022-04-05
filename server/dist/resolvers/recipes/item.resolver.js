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
exports.RecipeItemResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Recipe_1 = require("../../entity/Recipe");
const recipes_1 = require("../../utils/responses/recipes");
let RecipeItemResolver = class RecipeItemResolver {
    async recipe(id) {
        if (!id) {
            return {
                status: false,
                message: "Invalid data !",
            };
        }
        const recipe = await Recipe_1.Recipe.findOne({
            where: { id: id },
            relations: ["instructions", "ingredients"],
        });
        if (!recipe) {
            return {
                status: false,
                message: "Recipe Not Found !",
            };
        }
        return {
            status: true,
            recipe: recipe,
        };
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => recipes_1.RecipeItemResponse),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RecipeItemResolver.prototype, "recipe", null);
RecipeItemResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], RecipeItemResolver);
exports.RecipeItemResolver = RecipeItemResolver;
//# sourceMappingURL=item.resolver.js.map