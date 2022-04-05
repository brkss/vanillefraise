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
exports.ActivityCategoryResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Activity_1 = require("../../entity/Activity");
const data_1 = require("../../utils/data");
let ActivityCategoryResolver = class ActivityCategoryResolver {
    async seedActivityCategories() {
        const categories = await Activity_1.ActivityCategory.find();
        if (categories.length == 0) {
            for (let cat of data_1.data) {
                const category = new Activity_1.ActivityCategory();
                category.name = cat.name;
                category.icon = cat.icon.toString();
                await category.save();
            }
            return true;
        }
        return false;
    }
    async activityCategories() {
        return await Activity_1.ActivityCategory.find();
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ActivityCategoryResolver.prototype, "seedActivityCategories", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Activity_1.ActivityCategory]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ActivityCategoryResolver.prototype, "activityCategories", null);
ActivityCategoryResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], ActivityCategoryResolver);
exports.ActivityCategoryResolver = ActivityCategoryResolver;
//# sourceMappingURL=category.resolver.js.map