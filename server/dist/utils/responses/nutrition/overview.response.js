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
exports.NutritionOverviewData = exports.NutritionCategoryOverview = exports.NutritionOverviewResponse = void 0;
const type_graphql_1 = require("type-graphql");
let NutritionOverviewResponse = class NutritionOverviewResponse {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Boolean)
], NutritionOverviewResponse.prototype, "status", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], NutritionOverviewResponse.prototype, "message", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [NutritionCategoryOverview], { nullable: true }),
    __metadata("design:type", Array)
], NutritionOverviewResponse.prototype, "data", void 0);
NutritionOverviewResponse = __decorate([
    (0, type_graphql_1.ObjectType)()
], NutritionOverviewResponse);
exports.NutritionOverviewResponse = NutritionOverviewResponse;
let NutritionCategoryOverview = class NutritionCategoryOverview {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], NutritionCategoryOverview.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], NutritionCategoryOverview.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [NutritionOverviewData]),
    __metadata("design:type", Array)
], NutritionCategoryOverview.prototype, "nutritiens", void 0);
NutritionCategoryOverview = __decorate([
    (0, type_graphql_1.ObjectType)()
], NutritionCategoryOverview);
exports.NutritionCategoryOverview = NutritionCategoryOverview;
let NutritionOverviewData = class NutritionOverviewData {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], NutritionOverviewData.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], NutritionOverviewData.prototype, "code", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], NutritionOverviewData.prototype, "quantity", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], NutritionOverviewData.prototype, "unit", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], NutritionOverviewData.prototype, "recomendation", void 0);
NutritionOverviewData = __decorate([
    (0, type_graphql_1.ObjectType)()
], NutritionOverviewData);
exports.NutritionOverviewData = NutritionOverviewData;
//# sourceMappingURL=overview.response.js.map