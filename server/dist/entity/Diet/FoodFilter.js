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
exports.DietFoodFilter = void 0;
const typeorm_1 = require("typeorm");
const HealthLabelReference_1 = require("../../entity/Nutrition/HealthLabelReference");
const User_1 = require("../../entity/User");
const type_graphql_1 = require("type-graphql");
let DietFoodFilter = class DietFoodFilter extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], DietFoodFilter.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => HealthLabelReference_1.HealthLabelRefrence),
    (0, type_graphql_1.Field)(() => HealthLabelReference_1.HealthLabelRefrence),
    (0, typeorm_1.ManyToOne)(() => HealthLabelReference_1.HealthLabelRefrence, (hlr) => hlr.filters, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", HealthLabelReference_1.HealthLabelRefrence)
], DietFoodFilter.prototype, "healthlabel", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => User_1.User),
    (0, typeorm_1.ManyToOne)(() => User_1.User, (user) => user.filters, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", User_1.User)
], DietFoodFilter.prototype, "user", void 0);
DietFoodFilter = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], DietFoodFilter);
exports.DietFoodFilter = DietFoodFilter;
//# sourceMappingURL=FoodFilter.js.map