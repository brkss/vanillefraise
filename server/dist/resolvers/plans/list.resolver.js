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
exports.PlansListResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Plan_1 = require("../../entity/Plan");
const middlewares_1 = require("../..//utils/middlewares");
const User_1 = require("../../entity/User");
let PlansListResolver = class PlansListResolver {
    async plans(ctx) {
        const user = await User_1.User.findOne({ where: { id: ctx.payload.userID } });
        if (!user)
            return [];
        const plans = await Plan_1.Plan.find({
            where: [{ user: user, public: false }, { public: true }],
            relations: ["trackedElements", "trackedElements.nutriton"],
        });
        return plans;
    }
    async planDetails(id, ctx) {
        const user = await User_1.User.findOne({ where: { id: ctx.payload.userID } });
        if (!user)
            return null;
        const plan = await Plan_1.Plan.findOne({
            where: [{ id: id, user: user, public: false }, { id: id, public: true }],
            relations: ["trackedElements", "trackedElements.nutriton", "userplans"],
        });
        return plan || null;
    }
};
__decorate([
    (0, type_graphql_1.UseMiddleware)(middlewares_1.isUserAuth),
    (0, type_graphql_1.Query)(() => [Plan_1.Plan]),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlansListResolver.prototype, "plans", null);
__decorate([
    (0, type_graphql_1.UseMiddleware)(middlewares_1.isUserAuth),
    (0, type_graphql_1.Query)(() => Plan_1.Plan, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PlansListResolver.prototype, "planDetails", null);
PlansListResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], PlansListResolver);
exports.PlansListResolver = PlansListResolver;
//# sourceMappingURL=list.resolver.js.map