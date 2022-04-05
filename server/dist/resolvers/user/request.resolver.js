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
exports.RequestEarlyAccessResolver = void 0;
const type_graphql_1 = require("type-graphql");
const User_1 = require("../../entity/User");
const EarlyAccess_1 = require("../../entity/UserInfo/EarlyAccess");
const middlewares_1 = require("../../utils/middlewares");
let RequestEarlyAccessResolver = class RequestEarlyAccessResolver {
    async requestEarlyAccess(service, ctx) {
        const user = await User_1.User.findOne({ where: { id: ctx.payload.userID } });
        if (!user)
            return false;
        const rq = await EarlyAccess_1.EarlyAccessRequest.find({ where: { user: user, service: service } });
        if (rq.length > 0)
            return false;
        const request = new EarlyAccess_1.EarlyAccessRequest();
        request.user = user;
        request.service = service;
        await request.save();
        return true;
    }
    async isRequested(service, ctx) {
        const user = await User_1.User.findOne({ where: { id: ctx.payload.userID } });
        if (!user)
            return false;
        const rq = await EarlyAccess_1.EarlyAccessRequest.find({ where: { user: user, service: service } });
        if (rq.length > 0)
            return true;
        return false;
    }
};
__decorate([
    (0, type_graphql_1.UseMiddleware)(middlewares_1.isUserAuth),
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)('service')),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], RequestEarlyAccessResolver.prototype, "requestEarlyAccess", null);
__decorate([
    (0, type_graphql_1.UseMiddleware)(middlewares_1.isUserAuth),
    (0, type_graphql_1.Query)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)('service')),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], RequestEarlyAccessResolver.prototype, "isRequested", null);
RequestEarlyAccessResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], RequestEarlyAccessResolver);
exports.RequestEarlyAccessResolver = RequestEarlyAccessResolver;
//# sourceMappingURL=request.resolver.js.map