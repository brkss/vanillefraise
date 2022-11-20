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
exports.User = void 0;
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const ResetPassword_1 = require("./ResetPassword");
const Record_1 = require("./Record");
const Mental_1 = require("./Mental");
const UserInfo_1 = require("./UserInfo");
const Activity_1 = require("./Activity");
const EarlyAccess_1 = require("./UserInfo/EarlyAccess");
const MealRecipes_1 = require("./Meals/MealRecipes");
const Diet_1 = require("./Diet");
const Recipe_1 = require("./Recipe");
const Plan_1 = require("./Plan");
let User = class User extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], User.prototype, "created_at", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ default: 1 }),
    __metadata("design:type", Number)
], User.prototype, "version", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], User.prototype, "weight", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], User.prototype, "height", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "gender", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], User.prototype, "bmi", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "verified", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], User.prototype, "birth", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ResetPassword_1.ResetPassword, (resetpasswords) => resetpasswords.user),
    __metadata("design:type", Array)
], User.prototype, "resetpasswords", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Record_1.Record]),
    (0, typeorm_1.OneToMany)(() => Record_1.Record, (records) => records.user),
    __metadata("design:type", Array)
], User.prototype, "records", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Boolean),
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "banned", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Mental_1.MoodRecord]),
    (0, typeorm_1.OneToMany)(() => Mental_1.MoodRecord, (moodrecords) => moodrecords.user),
    __metadata("design:type", Array)
], User.prototype, "moodrecords", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [UserInfo_1.SpecialCondition]),
    (0, typeorm_1.ManyToMany)(() => UserInfo_1.SpecialCondition, (specialconditions) => specialconditions.users),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], User.prototype, "specialconditions", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [UserInfo_1.CookedRecipe]),
    (0, typeorm_1.OneToMany)(() => UserInfo_1.CookedRecipe, (cookedrecipes) => cookedrecipes.user),
    __metadata("design:type", Array)
], User.prototype, "cookedrecipes", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [EarlyAccess_1.EarlyAccessRequest]),
    (0, typeorm_1.OneToMany)(() => EarlyAccess_1.EarlyAccessRequest, (earequest) => earequest.user),
    __metadata("design:type", Array)
], User.prototype, "earequest", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [MealRecipes_1.MealRecipes]),
    (0, typeorm_1.OneToMany)(() => MealRecipes_1.MealRecipes, (mealrecipes) => mealrecipes.user),
    __metadata("design:type", Array)
], User.prototype, "mealrecipes", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Activity_1.Activity]),
    (0, typeorm_1.OneToMany)(() => Activity_1.Activity, (activities) => activities.user),
    __metadata("design:type", Array)
], User.prototype, "activities", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Diet_1.DietFoodFilter]),
    (0, typeorm_1.OneToMany)(() => Diet_1.DietFoodFilter, (filter) => filter.user),
    __metadata("design:type", Array)
], User.prototype, "filters", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Diet_1.MacrosConfig),
    (0, typeorm_1.OneToOne)(() => Diet_1.MacrosConfig, (config) => config.user),
    __metadata("design:type", Diet_1.MacrosConfig)
], User.prototype, "config", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Diet_1.DietRecord]),
    (0, typeorm_1.OneToMany)(() => Diet_1.DietRecord, (record) => record.user),
    __metadata("design:type", Array)
], User.prototype, "dietRecords", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Recipe_1.RecipeReport),
    (0, typeorm_1.OneToMany)(() => Recipe_1.RecipeReport, (report) => report.user),
    __metadata("design:type", Array)
], User.prototype, "reportedrecipes", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Plan_1.Plan]),
    (0, typeorm_1.OneToMany)(() => Plan_1.Plan, plans => plans.user),
    __metadata("design:type", Array)
], User.prototype, "plans", void 0);
User = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)("users")
], User);
exports.User = User;
//# sourceMappingURL=User.js.map