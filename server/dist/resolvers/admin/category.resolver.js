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
exports.AdminRecipeCategoryResolver = void 0;
const type_graphql_1 = require("type-graphql");
const admin_mw_1 = require("../../utils/middlewares/admin.mw");
const Category_1 = require("../../entity/Recipe/Category");
const responses_1 = require("../../utils/responses");
let AdminRecipeCategoryResolver = class AdminRecipeCategoryResolver {
    async adminCategories() {
        const categories = await Category_1.RecipeCategory.find({
            relations: ["recipes"],
        });
        let data = [];
        for (let c of categories) {
            const obj = {
                category: c,
                count: c.recipes.length,
            };
            data.push(obj);
        }
        return data;
    }
};
__decorate([
    (0, type_graphql_1.UseMiddleware)(admin_mw_1.isAdminAuth),
    (0, type_graphql_1.Query)(() => [responses_1.AdminCategoryResponse]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminRecipeCategoryResolver.prototype, "adminCategories", null);
AdminRecipeCategoryResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], AdminRecipeCategoryResolver);
exports.AdminRecipeCategoryResolver = AdminRecipeCategoryResolver;
//# sourceMappingURL=category.resolver.js.map