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
exports.RecordCategoryResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Record_1 = require("../../entity/Record");
const categories_data = [
    {
        name: "Crabs",
        icon: "🥗",
        unit: "g",
    },
    {
        name: "Fast Insulin",
        icon: "💉",
        unit: "unit",
    },
    {
        name: "BS",
        icon: "🩸",
        unit: "mg/dl",
    },
    {
        name: "Correction",
        icon: "💉",
        unit: "unit",
    },
    {
        name: "Basal Insulin",
        icon: "💉",
        unit: "unit",
    },
];
let RecordCategoryResolver = class RecordCategoryResolver {
    async seedRecordCategories() {
        const categories = await Record_1.RecordCategory.find();
        if (categories.length == 0) {
            for (let c of categories_data) {
                const category = new Record_1.RecordCategory();
                category.name = c.name;
                category.icon = c.icon;
                category.unit = c.unit;
                await category.save();
            }
            return true;
        }
        return false;
    }
    async recordCategories() {
        return await Record_1.RecordCategory.find();
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RecordCategoryResolver.prototype, "seedRecordCategories", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Record_1.RecordCategory]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RecordCategoryResolver.prototype, "recordCategories", null);
RecordCategoryResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], RecordCategoryResolver);
exports.RecordCategoryResolver = RecordCategoryResolver;
//# sourceMappingURL=category.resolver.js.map