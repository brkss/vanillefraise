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
exports.CreateActivityResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Activity_1 = require("../../entity/Activity");
const middlewares_1 = require("../../utils/middlewares");
const User_1 = require("../../entity/User");
const activity_1 = require("../../utils/responses/activity");
const activity_2 = require("../../utils/inputs/activity");
const activity_3 = require("../../utils/helpers/activity");
let CreateActivityResolver = class CreateActivityResolver {
    async createActivity(data, ctx) {
        if (!data.category || !data.duration || !data.feedback) {
            return {
                status: false,
                message: "Invalid Data !",
            };
        }
        const user = await User_1.User.findOne({ where: { id: ctx.payload.userID } });
        const category = await Activity_1.ActivityCategory.findOne({
            where: { id: data.category },
        });
        if (!user || !category) {
            return {
                status: false,
                message: "Invalid User !",
            };
        }
        try {
            const activity = new Activity_1.Activity();
            activity.category = category;
            activity.user = user;
            activity.feedback = data.feedback;
            activity.duration = data.duration;
            activity.calories = (0, activity_3.calculateActivityBurnedCalories)(category, data.duration, user.weight);
            await activity.save();
            const a = await Activity_1.Activity.findOne({
                where: { id: activity.id },
                relations: ["category"],
            });
            return {
                status: true,
                message: "Activity Created suuccessfuly ! ",
                burnedCalories: activity.calories,
                activity: a,
            };
        }
        catch (e) {
            console.log("Somnething went wrong while creating activity !");
            return {
                status: false,
                message: "Something went wrong ! ",
            };
        }
    }
    async getUserBurnedCalories(time, user, category) {
        console.log("time => ", time);
        const scale = (0, activity_3.activityDurationScale)(time);
        const weight = user.weight;
        const caloriesHandBook = await Activity_1.ActivityCalories.find({
            where: { category: category },
        });
        if (caloriesHandBook.length == 0)
            return 0;
        let min = caloriesHandBook[0];
        for (let d of caloriesHandBook) {
            if (d.zone <= weight)
                min = d;
        }
        return Math.floor(min.val * scale);
    }
};
__decorate([
    (0, type_graphql_1.UseMiddleware)(middlewares_1.isUserAuth),
    (0, type_graphql_1.Mutation)(() => activity_1.CreateActivityResponse),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [activity_2.CreateActivityInput, Object]),
    __metadata("design:returntype", Promise)
], CreateActivityResolver.prototype, "createActivity", null);
CreateActivityResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], CreateActivityResolver);
exports.CreateActivityResolver = CreateActivityResolver;
//# sourceMappingURL=create.resolver.js.map