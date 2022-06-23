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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityCaloriesResolver = void 0;
const type_graphql_1 = require("type-graphql");
const calories_data_1 = require("../../utils/data/activity/calories.data");
const Activity_1 = require("../../entity/Activity");
const middlewares_1 = require("../../utils/middlewares");
const User_1 = require("../../entity/User");
const calculateBurnedCalories_1 = require("../../utils/helpers/activity/calculateBurnedCalories");
let ActivityCaloriesResolver = class ActivityCaloriesResolver {
    async getActivityCalories(cat, ctx) {
        const user = await User_1.User.findOne({ where: { id: ctx.payload.userID } });
        if (!user)
            return -1;
        const category = await Activity_1.ActivityCategory.findOne({ where: { id: cat } });
        if (!category)
            return -1;
        const burned_calories = (0, calculateBurnedCalories_1.calculateActivityBurnedCalories)(category, "1:00", user.weight);
        return burned_calories;
    }
    async seedActivityCalories() {
        const acalories = await Activity_1.ActivityCalories.find();
        if (acalories.length == 0) {
            const categories = await Activity_1.ActivityCategory.find();
            const data = (0, calories_data_1.getData)(categories);
            for (let d of data) {
                const cat_index = categories.findIndex((x) => x.id === d.category);
                if (cat_index != -1) {
                    const ac = new Activity_1.ActivityCalories();
                    ac.category = categories[cat_index];
                    ac.name = d.name;
                    ac.zone = d.zone;
                    ac.val = d.val;
                    await ac.save();
                }
            }
            return true;
        }
        return false;
    }
};
__decorate([
    (0, type_graphql_1.UseMiddleware)(middlewares_1.isUserAuth),
    (0, type_graphql_1.Query)(() => Number),
    __param(0, (0, type_graphql_1.Arg)("cat")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ActivityCaloriesResolver.prototype, "getActivityCalories", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ActivityCaloriesResolver.prototype, "seedActivityCalories", null);
ActivityCaloriesResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], ActivityCaloriesResolver);
exports.ActivityCaloriesResolver = ActivityCaloriesResolver;
//# sourceMappingURL=calories.resolver.js.map