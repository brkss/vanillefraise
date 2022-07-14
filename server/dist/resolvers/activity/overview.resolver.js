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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityOverviewResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Activity_1 = require("../../entity/Activity");
const auth_mw_1 = require("../../utils/middlewares/auth.mw");
const User_1 = require("../../entity/User");
const typeorm_1 = require("typeorm");
const Record_1 = require("../../entity/Diet/Record");
const dayjs_1 = __importDefault(require("dayjs"));
const typeorm_2 = require("typeorm");
const activity_1 = require("../../utils/responses/activity");
let ActivityOverviewResolver = class ActivityOverviewResolver {
    async activitiesBurnedCaloriesData(ctx) {
        const user = await User_1.User.findOne({
            where: { id: ctx.payload.userID },
        });
        if (!user)
            return [];
        const activities = await Activity_1.Activity.find({
            where: { user: user },
            order: { created_at: "DESC" },
            take: 7,
        });
        const result = [];
        for (let activity of activities) {
            const index = result.findIndex((x) => (0, dayjs_1.default)(x.date).diff(activity.created_at, "d") === 0);
            if (index === -1) {
                result.push(Object.assign({}, { count: activity.calories || 0, date: activity.created_at }));
            }
            else if (index > -1) {
                result[index].count += activity.calories || 0;
            }
        }
        return result;
    }
    async getUserBurnedCalories(ctx) {
        const user = await User_1.User.findOne({
            where: {
                id: ctx.payload.userID,
            },
        });
        if (!user) {
            return 0;
        }
        const { sum } = await (0, typeorm_1.getRepository)(Activity_1.Activity)
            .createQueryBuilder("activities")
            .select("SUM(calories)", "sum")
            .where("userID = :userid")
            .andWhere("created_at >= CURRENT_DATE")
            .setParameters({ userid: user.id })
            .getRawOne();
        console.log("SUM -> ", sum);
        const records = await Record_1.DietRecord.find({
            where: {
                type: "BURNED_CALORIES",
                user: user,
                created_at: (0, typeorm_2.Like)(`${(0, dayjs_1.default)().format("YYYY-MM-DD")}%`),
            },
        });
        const res = (sum === null ? 0 : Number(sum)) +
            records.reduce((s, e) => s + e.value, 0);
        return res;
    }
};
__decorate([
    (0, type_graphql_1.UseMiddleware)(auth_mw_1.isUserAuth),
    (0, type_graphql_1.Query)(() => [activity_1.ActivityDataResponse]),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ActivityOverviewResolver.prototype, "activitiesBurnedCaloriesData", null);
__decorate([
    (0, type_graphql_1.UseMiddleware)(auth_mw_1.isUserAuth),
    (0, type_graphql_1.Query)(() => Number),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ActivityOverviewResolver.prototype, "getUserBurnedCalories", null);
ActivityOverviewResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], ActivityOverviewResolver);
exports.ActivityOverviewResolver = ActivityOverviewResolver;
//# sourceMappingURL=overview.resolver.js.map