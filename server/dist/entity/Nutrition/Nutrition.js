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
exports.Nutrition = void 0;
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const NutrientCategory_1 = require("./NutrientCategory");
const TrackedElement_1 = require("../Plan/TrackedElement");
let Nutrition = class Nutrition extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Nutrition.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Nutrition.prototype, "code", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Nutrition.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Nutrition.prototype, "unit", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => NutrientCategory_1.NutritienCategory),
    (0, typeorm_1.ManyToOne)(() => NutrientCategory_1.NutritienCategory, (category) => category.nutrients),
    __metadata("design:type", NutrientCategory_1.NutritienCategory)
], Nutrition.prototype, "category", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [TrackedElement_1.TrackedElement]),
    (0, typeorm_1.OneToMany)(() => TrackedElement_1.TrackedElement, trackedElements => trackedElements.nutriton),
    __metadata("design:type", Array)
], Nutrition.prototype, "trackedElements", void 0);
Nutrition = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Nutrition);
exports.Nutrition = Nutrition;
//# sourceMappingURL=Nutrition.js.map