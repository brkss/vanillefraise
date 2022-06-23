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
exports.ActivityCategory = void 0;
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const Activity_1 = require("./Activity");
const ActivityCalories_1 = require("./ActivityCalories");
let ActivityCategory = class ActivityCategory extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], ActivityCategory.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ActivityCategory.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ActivityCategory.prototype, "icon", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [ActivityCalories_1.ActivityCalories]),
    (0, typeorm_1.OneToMany)(() => ActivityCalories_1.ActivityCalories, (calories) => calories.category),
    __metadata("design:type", Array)
], ActivityCategory.prototype, "calories", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ActivityCategory.prototype, "highmet", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ActivityCategory.prototype, "lowmet", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Activity_1.Activity]),
    (0, typeorm_1.OneToMany)(() => Activity_1.Activity, (activities) => activities.category),
    __metadata("design:type", Array)
], ActivityCategory.prototype, "activities", void 0);
ActivityCategory = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)("activity_categories")
], ActivityCategory);
exports.ActivityCategory = ActivityCategory;
//# sourceMappingURL=ActivityCategory.js.map