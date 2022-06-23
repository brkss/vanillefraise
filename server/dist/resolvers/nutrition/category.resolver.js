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
exports.NutrientCategoryResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Nutrition_1 = require("../../entity/Nutrition");
const tmp = [
    {
        name: "Mineral",
        nutrients: ["K", "P", "ZN", "CA", "RIBF", "FOLAC", "NA", "MG", "FE"],
    },
    {
        name: "Vitamins",
        nutrients: [
            "TOCPHA",
            "THIA",
            "VITD",
            "FOLFD",
            "FOLDFE",
            "VITC",
            "VITB12",
            "VITA_RAE",
            "NIA",
            "VITB6A",
            "VITK1",
        ],
    },
    {
        name: "Protein",
        nutrients: ["PROCNT"],
    },
    {
        name: "Energy",
        nutrients: ["ENERC_KCAL"],
    },
    {
        name: "Fats",
        nutrients: ["FAPU", "CHOLE", "FAT", "FAMS", "FASAT", "FATRN"],
    },
    {
        name: "Water",
        nutrients: ["WATER"],
    },
    {
        name: "Carbohydrates",
        nutrients: [
            "SUGAR.added",
            "SUGAR",
            "CHOCDF",
            "Sugar.alcohol",
            "FIBTG",
            "CHOCDF.net",
        ],
    },
];
let NutrientCategoryResolver = class NutrientCategoryResolver {
    async seedNutrientCategories() {
        const categories = await Nutrition_1.NutritienCategory.find();
        if (categories.length > 0)
            return false;
        for (let cat of tmp) {
            const category = new Nutrition_1.NutritienCategory();
            category.name = cat.name;
            await category.save();
            for (let n of cat.nutrients) {
                const nutritien = await Nutrition_1.Nutrition.findOne({ where: { code: n } });
                if (!nutritien)
                    continue;
                nutritien.category = category;
                await nutritien.save();
            }
        }
        return true;
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NutrientCategoryResolver.prototype, "seedNutrientCategories", null);
NutrientCategoryResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], NutrientCategoryResolver);
exports.NutrientCategoryResolver = NutrientCategoryResolver;
//# sourceMappingURL=category.resolver.js.map