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
exports.MacrosConfig = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../User");
const type_graphql_1 = require("type-graphql");
let MacrosConfig = class MacrosConfig extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], MacrosConfig.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)("float"),
    __metadata("design:type", Number)
], MacrosConfig.prototype, "activityFactor", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], MacrosConfig.prototype, "fat", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], MacrosConfig.prototype, "carbs", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], MacrosConfig.prototype, "protein", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => User_1.User),
    (0, typeorm_1.OneToOne)(() => User_1.User, { onDelete: "CASCADE", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", User_1.User)
], MacrosConfig.prototype, "user", void 0);
MacrosConfig = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)("macros_configs")
], MacrosConfig);
exports.MacrosConfig = MacrosConfig;
//# sourceMappingURL=MacrosConfig.js.map