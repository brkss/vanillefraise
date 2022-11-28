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
exports.PlanTrackingResolver = void 0;
const type_graphql_1 = require("type-graphql");
const User_1 = require("../../entity/User");
const middlewares_1 = require("../../utils/middlewares");
const Plan_1 = require("../../entity/Plan");
const plans_1 = require("../../utils/responses/plans");
const nutrition_1 = require("../../utils/helpers/nutrition");
let PlanTrackingResolver = class PlanTrackingResolver {
    async togglePlanTracking(planId, ctx) {
        const user = await User_1.User.findOne({ where: { id: ctx.payload.userID } });
        if (!user) {
            return {
                status: false,
                message: "Invalid user !",
            };
        }
        const plan = await Plan_1.Plan.findOne({
            where: [
                { id: planId, public: true },
                { id: planId, user: user },
            ],
        });
        if (!plan) {
            return {
                status: false,
                message: "Plan not found !",
            };
        }
        let current = true;
        let userPlan = await Plan_1.UserPlan.findOne({ where: { user: user, plan } });
        if (!userPlan) {
            userPlan = new Plan_1.UserPlan();
            userPlan.user = user;
            userPlan.plan = plan;
            await userPlan.save();
        }
        else {
            await userPlan.remove();
            current = false;
        }
        return {
            status: true,
            current: current,
        };
    }
    async tracking(ctx) {
        const user = await User_1.User.findOne({ where: { id: ctx.payload.userID } });
        if (!user)
            return [];
        const data = await Plan_1.Plan.find({
            where: [
                { user: user, public: false },
                { public: true },
            ],
            relations: ["trackedElements", "trackedElements.nutriton"],
        });
        const plans = [];
        for (let p of data) {
            const userPlan = await Plan_1.UserPlan.findOne({ where: { user: user, plan: p } });
            if (userPlan) {
                plans.push(p);
            }
        }
        const response = [];
        for (let plan of plans) {
            const obj = {
                plan: plan,
                elements: await Promise.all(plan.trackedElements.map(async (item) => ({
                    current: await (0, nutrition_1.getTokenNutrition)(user, item.nutriton.code),
                    name: item.nutriton.name,
                    target: item.quantity,
                    unit: item.nutriton.unit,
                    code: item.nutriton.code,
                    id: item.id
                }))),
            };
            response.push(obj);
        }
        return response;
    }
};
__decorate([
    (0, type_graphql_1.UseMiddleware)(middlewares_1.isUserAuth),
    (0, type_graphql_1.Mutation)(() => plans_1.TogglePlanTrackingResponse),
    __param(0, (0, type_graphql_1.Arg)("planId")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PlanTrackingResolver.prototype, "togglePlanTracking", null);
__decorate([
    (0, type_graphql_1.UseMiddleware)(middlewares_1.isUserAuth),
    (0, type_graphql_1.Query)(() => [plans_1.TrackingPlanResponse]),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlanTrackingResolver.prototype, "tracking", null);
PlanTrackingResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], PlanTrackingResolver);
exports.PlanTrackingResolver = PlanTrackingResolver;
//# sourceMappingURL=tracking.resolver.js.map