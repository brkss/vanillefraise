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
exports.ReportRecipeResolver = void 0;
const type_graphql_1 = require("type-graphql");
const auth_mw_1 = require("../../utils/middlewares/auth.mw");
const User_1 = require("../../entity/User");
const Recipe_1 = require("../../entity/Recipe");
const recipes_1 = require("../../utils/responses/recipes");
let ReportRecipeResolver = class ReportRecipeResolver {
    async reportRecipe(recipe_id, ctx) {
        if (!recipe_id)
            return { message: "Invalid Data !", status: false };
        const user = await User_1.User.findOne({ where: { id: ctx.payload.userID } });
        const recipe = await Recipe_1.Recipe.findOne({ where: { id: recipe_id } });
        if (!user || !recipe)
            return { message: "Invalid Recipe !", status: false };
        const alreadyReported = await Recipe_1.RecipeReport.findOne({
            where: { user: user, recipe: recipe },
        });
        if (alreadyReported)
            return {
                status: false,
                message: "You already reported this recipe !",
            };
        const report = new Recipe_1.RecipeReport();
        report.recipe = recipe;
        report.user = user;
        await report.save();
        return {
            message: "Thank you ! recipe reported successfuly !",
            status: true,
        };
    }
    async recipeReports() {
        const reports = await Recipe_1.RecipeReport.find();
        return reports;
    }
};
__decorate([
    (0, type_graphql_1.UseMiddleware)(auth_mw_1.isUserAuth),
    (0, type_graphql_1.Mutation)(() => recipes_1.ReportRecipeResponse),
    __param(0, (0, type_graphql_1.Arg)("recipe_id")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ReportRecipeResolver.prototype, "reportRecipe", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Recipe_1.RecipeReport]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReportRecipeResolver.prototype, "recipeReports", null);
ReportRecipeResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], ReportRecipeResolver);
exports.ReportRecipeResolver = ReportRecipeResolver;
//# sourceMappingURL=report.resolver.js.map