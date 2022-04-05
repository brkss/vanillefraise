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
exports.ActivityCalories = void 0;
const typeorm_1 = require("typeorm");
const ActivityCategory_1 = require("./ActivityCategory");
const type_graphql_1 = require("type-graphql");
let ActivityCalories = class ActivityCalories extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], ActivityCalories.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ActivityCalories.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ActivityCalories.prototype, "zone", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ActivityCalories.prototype, "val", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => ActivityCategory_1.ActivityCategory),
    (0, typeorm_1.ManyToOne)(() => ActivityCategory_1.ActivityCategory, category => category.calories, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", ActivityCategory_1.ActivityCategory)
], ActivityCalories.prototype, "category", void 0);
ActivityCalories = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], ActivityCalories);
exports.ActivityCalories = ActivityCalories;
//# sourceMappingURL=ActivityCalories.js.map