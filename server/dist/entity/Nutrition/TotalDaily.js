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
exports.RecipeTotalDaily = void 0;
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const Recipe_1 = require("../Recipe");
let RecipeTotalDaily = class RecipeTotalDaily extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], RecipeTotalDaily.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RecipeTotalDaily.prototype, "label", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RecipeTotalDaily.prototype, "code", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RecipeTotalDaily.prototype, "unit", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RecipeTotalDaily.prototype, "quantity", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Recipe_1.Recipe),
    (0, typeorm_1.ManyToOne)(() => Recipe_1.Recipe, recipe => recipe.totalDaily, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", Recipe_1.Recipe)
], RecipeTotalDaily.prototype, "recipe", void 0);
RecipeTotalDaily = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], RecipeTotalDaily);
exports.RecipeTotalDaily = RecipeTotalDaily;
//# sourceMappingURL=TotalDaily.js.map