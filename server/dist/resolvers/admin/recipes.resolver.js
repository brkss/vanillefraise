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
exports.AdminRecipeResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Recipe_1 = require("../../entity/Recipe");
const admin_mw_1 = require("../../utils/middlewares/admin.mw");
const responses_1 = require("../../utils/responses");
let AdminRecipeResolver = class AdminRecipeResolver {
    async adminRecipes() {
        const recipes = await Recipe_1.Recipe.find();
        let data = [];
        for (let r of recipes) {
            const o = {
                recipe: r,
            };
            data.push(o);
        }
        return data;
    }
    async changeRecipeVisibility(rid) {
        if (!rid) {
            return {
                status: false,
                message: "Invalid Data !"
            };
        }
        const recipe = await Recipe_1.Recipe.findOne({ where: { id: rid } });
        if (!recipe) {
            return {
                status: false,
                message: "Invalid Recipe !"
            };
        }
        recipe.public = !recipe.public;
        await recipe.save();
        return {
            status: true,
            message: "Recipe's visibility changed successfuly !"
        };
    }
};
__decorate([
    (0, type_graphql_1.UseMiddleware)(admin_mw_1.isAdminAuth),
    (0, type_graphql_1.Query)(() => [responses_1.AdminRecipesResponse]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminRecipeResolver.prototype, "adminRecipes", null);
__decorate([
    (0, type_graphql_1.UseMiddleware)(admin_mw_1.isAdminAuth),
    (0, type_graphql_1.Mutation)(() => responses_1.DefaultResponse),
    __param(0, (0, type_graphql_1.Arg)('rid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminRecipeResolver.prototype, "changeRecipeVisibility", null);
AdminRecipeResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], AdminRecipeResolver);
exports.AdminRecipeResolver = AdminRecipeResolver;
//# sourceMappingURL=recipes.resolver.js.map