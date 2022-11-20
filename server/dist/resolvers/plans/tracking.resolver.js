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
                { id: planId, user: user, public: false },
            ],
        });
        if (!plan) {
            return {
                status: false,
                message: "Plan not found !",
            };
        }
        plan.active = !plan.active;
        await plan.save();
        return {
            status: true,
            current: plan.active,
        };
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
PlanTrackingResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], PlanTrackingResolver);
exports.PlanTrackingResolver = PlanTrackingResolver;
//# sourceMappingURL=tracking.resolver.js.map