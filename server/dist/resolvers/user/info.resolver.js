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
exports.UserInfoResolver = void 0;
const type_graphql_1 = require("type-graphql");
const User_1 = require("../../entity/User");
const middlewares_1 = require("../../utils/middlewares");
const responses_1 = require("../../utils/responses");
const user_1 = require("../../utils/inputs/user");
const bmr_1 = require("../../utils/helpers/user/bmr");
let UserInfoResolver = class UserInfoResolver {
    async me(ctx) {
        return (await User_1.User.findOne({ where: { id: ctx.payload.userID } })) || null;
    }
    async updateInfo(data, ctx) {
        if (!data.name || !data.height || !data.weight)
            return {
                status: false,
                message: "Invalid Input !",
            };
        const user = await User_1.User.findOne({ where: { id: ctx.payload.userID } });
        if (!user) {
            return {
                status: false,
                message: "Invalid User !",
            };
        }
        try {
            user.name = data.name;
            if (user.height != data.height || data.weight != user.weight) {
                const bmi = (0, bmr_1.calcBMR)(user.birth, data.weight, data.height, user.gender.toUpperCase());
                user.height = data.height;
                user.weight = data.weight;
                user.bmi = bmi;
            }
            await user.save();
            return {
                status: true,
                message: "Data updated successfuly !",
            };
        }
        catch (e) {
            console.log("Something went wrong : ", e);
            return {
                status: false,
                message: "Something went wrong !",
            };
        }
    }
};
__decorate([
    (0, type_graphql_1.UseMiddleware)(middlewares_1.isUserAuth),
    (0, type_graphql_1.Query)(() => User_1.User, { nullable: true }),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserInfoResolver.prototype, "me", null);
__decorate([
    (0, type_graphql_1.UseMiddleware)(middlewares_1.isUserAuth),
    (0, type_graphql_1.Mutation)(() => responses_1.DefaultResponse),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.UpdateUserInfoInput, Object]),
    __metadata("design:returntype", Promise)
], UserInfoResolver.prototype, "updateInfo", null);
UserInfoResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], UserInfoResolver);
exports.UserInfoResolver = UserInfoResolver;
//# sourceMappingURL=info.resolver.js.map