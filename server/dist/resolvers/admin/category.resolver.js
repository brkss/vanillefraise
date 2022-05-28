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
exports.AdminRecipeCategoryResolver = void 0;
const type_graphql_1 = require("type-graphql");
const admin_mw_1 = require("../../utils/middlewares/admin.mw");
const Category_1 = require("../../entity/Recipe/Category");
const responses_1 = require("../../utils/responses");
const inputs_1 = require("../../utils/inputs");
const responses_2 = require("../../utils/responses");
const recipes_1 = require("../../utils/responses/recipes");
const recipes_2 = require("../../utils/inputs/recipes");
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
    async categoryDetails(cid) {
        if (!cid)
            return null;
        const category = await Category_1.RecipeCategory.findOne({ where: { id: cid } });
        if (!category)
            return null;
        return category;
    }
    async updateCategory(data) {
        if (!data || !data.id)
            return {
                status: false,
                message: "Invalid Data !",
            };
        const category = await Category_1.RecipeCategory.findOne({ where: { id: data.id } });
        if (!category) {
            return {
                status: false,
                message: "category not found !",
            };
        }
        category.name = data.name || category.name;
        category.icon = data.icon || category.icon;
        category.active = data.active;
        await category.save();
        return {
            status: true,
            message: "Category updated successfuly !",
            category: category,
        };
    }
    async createRecipeCategory(data) {
        if (!data.name || !data.icon) {
            return {
                status: false,
                message: "Invalid Data !",
            };
        }
        try {
            const category = new Category_1.RecipeCategory();
            category.name = data.name;
            category.icon = data.icon;
            await category.save();
            return {
                status: true,
                message: "Category Created Successfuly !",
                category: category,
            };
        }
        catch (e) {
            console.log("Something went wrong : ", e);
            return {
                status: false,
                message: "Something went wrong !",
            };
        }
    }
    async deleteCategory(cat_id) {
        if (!cat_id) {
            return {
                status: false,
                message: "Invalid Data !",
            };
        }
        try {
            const category = await Category_1.RecipeCategory.findOne({ where: { id: cat_id } });
            if (!category) {
                return {
                    status: false,
                    message: "Invalid Category !",
                };
            }
            await category.remove();
            return {
                status: true,
                message: "Category Deleted Successufly !",
            };
        }
        catch (e) {
            console.log("Something went wrong : ", e);
            return {
                status: false,
                message: "Something went wrong",
            };
        }
    }
};
__decorate([
    (0, type_graphql_1.UseMiddleware)(admin_mw_1.isAdminAuth),
    (0, type_graphql_1.Query)(() => [responses_1.AdminCategoryResponse]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminRecipeCategoryResolver.prototype, "adminCategories", null);
__decorate([
    (0, type_graphql_1.UseMiddleware)(admin_mw_1.isAdminAuth),
    (0, type_graphql_1.Query)(() => Category_1.RecipeCategory, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("cid")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminRecipeCategoryResolver.prototype, "categoryDetails", null);
__decorate([
    (0, type_graphql_1.UseMiddleware)(admin_mw_1.isAdminAuth),
    (0, type_graphql_1.Mutation)(() => responses_2.UpdateCategoryResponse),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inputs_1.UpdateCategoryInput]),
    __metadata("design:returntype", Promise)
], AdminRecipeCategoryResolver.prototype, "updateCategory", null);
__decorate([
    (0, type_graphql_1.UseMiddleware)(admin_mw_1.isAdminAuth),
    (0, type_graphql_1.Mutation)(() => recipes_1.CreateRecipeCategoryResponse),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [recipes_2.CreateRecipeCategoryInput]),
    __metadata("design:returntype", Promise)
], AdminRecipeCategoryResolver.prototype, "createRecipeCategory", null);
__decorate([
    (0, type_graphql_1.UseMiddleware)(admin_mw_1.isAdminAuth),
    (0, type_graphql_1.Mutation)(() => responses_1.DefaultResponse),
    __param(0, (0, type_graphql_1.Arg)("cat_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminRecipeCategoryResolver.prototype, "deleteCategory", null);
AdminRecipeCategoryResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], AdminRecipeCategoryResolver);
exports.AdminRecipeCategoryResolver = AdminRecipeCategoryResolver;
//# sourceMappingURL=category.resolver.js.map