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
exports.NutritienCategory = void 0;
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const Nutrition_1 = require("./Nutrition");
let NutritienCategory = class NutritienCategory extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], NutritienCategory.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], NutritienCategory.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], NutritienCategory.prototype, "active", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Nutrition_1.Nutrition]),
    (0, typeorm_1.OneToMany)(() => Nutrition_1.Nutrition, nutrition => nutrition.category),
    __metadata("design:type", Array)
], NutritienCategory.prototype, "nutrients", void 0);
NutritienCategory = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)("nutritien_categories")
], NutritienCategory);
exports.NutritienCategory = NutritienCategory;
//# sourceMappingURL=NutrientCategory.js.map