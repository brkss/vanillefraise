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
const Translated_1 = require("../../entity/Translate/Translated");
const refrence_1 = require("../../utils/data/translate/refrence");
let RecipeItemResolver = class RecipeItemResolver {
    async setTranslatedIngredients(ings) {
        var _a, _b, _c, _d, _e, _f;
        const ingredients = [];
        for (let ing of ings) {
            const ti = await Translated_1.Translated.find({ where: { pointer: ing.id } });
            ingredients.push(Object.assign(Object.assign({}, ing), { es: {
                    unit: (_a = ti.find((x) => x.type === refrence_1.translated_text_refrence.ingredient_unit && x.lang === "es")) === null || _a === void 0 ? void 0 : _a.txt,
                    ingredient: (_b = ti.find((x) => x.type === refrence_1.translated_text_refrence.ingredient_txt && x.lang === "es")) === null || _b === void 0 ? void 0 : _b.txt,
                }, fr: {
                    unit: (_c = ti.find((x) => x.type === refrence_1.translated_text_refrence.ingredient_unit && x.lang === "fr")) === null || _c === void 0 ? void 0 : _c.txt,
                    ingredient: (_d = ti.find((x) => x.type === refrence_1.translated_text_refrence.ingredient_txt && x.lang === "fr")) === null || _d === void 0 ? void 0 : _d.txt,
                }, ar: {
                    unit: (_e = ti.find((x) => x.type === refrence_1.translated_text_refrence.ingredient_unit && x.lang === "ar")) === null || _e === void 0 ? void 0 : _e.txt,
                    ingredient: (_f = ti.find((x) => x.type === refrence_1.translated_text_refrence.ingredient_txt && x.lang === "ar")) === null || _f === void 0 ? void 0 : _f.txt,
                } }));
        }
        return ingredients;
    }
    async setTranslatedInstructions(insts) {
        var _a, _b, _c;
        const instructions = [];
        for (let inst of insts) {
            const ti = await Translated_1.Translated.find({
                where: { pointer: inst.id, type: refrence_1.translated_text_refrence.instruction },
            });
            instructions.push(Object.assign(Object.assign({}, inst), { ar: (_a = ti.find((x) => x.lang === "ar")) === null || _a === void 0 ? void 0 : _a.txt, es: (_b = ti.find((x) => x.lang === "es")) === null || _b === void 0 ? void 0 : _b.txt, fr: (_c = ti.find((x) => x.lang === "fr")) === null || _c === void 0 ? void 0 : _c.txt }));
        }
        return instructions;
    }
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
        if (!recipe)
            return {
                status: false,
                message: "Recipe Not Found !",
            };
        const ingredients = await this.setTranslatedIngredients(recipe.ingredients);
        const instructions = await this.setTranslatedInstructions(recipe.instructions);
        if (!recipe) {
            return {
                status: false,
                message: "Recipe Not Found !",
            };
        }
        return {
            status: true,
            recipe: recipe,
            ingredients: ingredients,
            instructions: instructions,
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