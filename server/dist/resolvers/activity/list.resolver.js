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
exports.ActivityListResolver = void 0;
const type_graphql_1 = require("type-graphql");
const middlewares_1 = require("../../utils/middlewares");
const User_1 = require("../../entity/User");
const Activity_1 = require("../../entity/Activity");
let ActivityListResolver = class ActivityListResolver {
    async activities(ctx) {
        const user = await User_1.User.findOne({ where: { id: ctx.payload.userID } });
        if (!user)
            return [];
        const activities = await Activity_1.Activity.find({
            where: { user: user },
            order: { created_at: 'DESC' },
            relations: ['category']
        });
        return activities;
    }
};
__decorate([
    (0, type_graphql_1.UseMiddleware)(middlewares_1.isUserAuth),
    (0, type_graphql_1.Query)(() => [Activity_1.Activity]),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ActivityListResolver.prototype, "activities", null);
ActivityListResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], ActivityListResolver);
exports.ActivityListResolver = ActivityListResolver;
//# sourceMappingURL=list.resolver.js.map