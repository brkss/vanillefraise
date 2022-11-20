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
exports.CreatePlanResolver = void 0;
const type_graphql_1 = require("type-graphql");
const middlewares_1 = require("../../utils/middlewares");
const plans_1 = require("../../utils/responses/plans");
const plan_1 = require("../../utils/inputs/plan");
const User_1 = require("../../entity/User");
const Plan_1 = require("../../entity/Plan");
const Nutrition_1 = require("../../entity/Nutrition/Nutrition");
let CreatePlanResolver = class CreatePlanResolver {
    async createPlan(data, ctx) {
        const user = await User_1.User.findOne({ where: { id: ctx.payload.userID } });
        if (!user) {
            return {
                status: false,
                message: "invalid user !",
            };
        }
        if (!data.name || data.elements.length === 0) {
            return {
                status: false,
                message: "Invalid Data !",
            };
        }
        try {
            const plan = new Plan_1.Plan();
            plan.name = data.name;
            plan.user = user;
            await plan.save();
            for (let element of data.elements) {
                const nutrition = await Nutrition_1.Nutrition.findOne({
                    where: { id: element.nutrition_id },
                });
                if (!nutrition)
                    continue;
                const trackedElement = new Plan_1.TrackedElement();
                trackedElement.plan = plan;
                trackedElement.nutriton = nutrition;
                trackedElement.quantity = element.quantity;
                await trackedElement.save();
            }
            return {
                status: true,
                message: "Plan Created Successfuly",
                plan: plan,
            };
        }
        catch (e) {
            console.log("somethinf went wrong creating plan : ", e);
            return {
                status: false,
                message: "Something went wrong !",
            };
        }
    }
};
__decorate([
    (0, type_graphql_1.UseMiddleware)(middlewares_1.isUserAuth),
    (0, type_graphql_1.Mutation)(() => plans_1.CreatePlanResponse),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [plan_1.CreatePlanInput, Object]),
    __metadata("design:returntype", Promise)
], CreatePlanResolver.prototype, "createPlan", null);
CreatePlanResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], CreatePlanResolver);
exports.CreatePlanResolver = CreatePlanResolver;
//# sourceMappingURL=create.resolver.js.map