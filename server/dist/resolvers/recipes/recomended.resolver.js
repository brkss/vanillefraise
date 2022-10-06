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
exports.RecomendedRecipesResolver = void 0;
const type_graphql_1 = require("type-graphql");
const User_1 = require("../../entity/User");
const auth_mw_1 = require("../../utils/middlewares/auth.mw");
const Recipe_1 = require("../../entity/Recipe");
const FilterRecipes_1 = require("../../utils/helpers/FilterRecipes");
let RecomendedRecipesResolver = class RecomendedRecipesResolver {
    async recommendedRecipes(ctx) {
        const user = await User_1.User.findOne({ where: { id: ctx.payload.userID } });
        if (!user) {
            return [];
        }
        console.log("found user !");
        const recipes = await Recipe_1.Recipe.find({ relations: ["healthlabel"] });
        const filteredRecipes = await (0, FilterRecipes_1.filterRecipes)(recipes, user);
        return filteredRecipes.sort((_) => Math.random() - 0.5).slice(0, 10);
    }
};
__decorate([
    (0, type_graphql_1.UseMiddleware)(auth_mw_1.isUserAuth),
    (0, type_graphql_1.Query)(() => [Recipe_1.Recipe]),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RecomendedRecipesResolver.prototype, "recommendedRecipes", null);
RecomendedRecipesResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], RecomendedRecipesResolver);
exports.RecomendedRecipesResolver = RecomendedRecipesResolver;
//# sourceMappingURL=recomended.resolver.js.map