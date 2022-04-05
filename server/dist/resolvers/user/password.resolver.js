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
exports.UserPasswordResolver = void 0;
const type_graphql_1 = require("type-graphql");
const auth_1 = require("../../utils/inputs/auth");
const auth_2 = require("../../utils/responses/auth");
const middlewares_1 = require("../../utils/middlewares");
const User_1 = require("../../entity/User");
const bcrypt_1 = __importDefault(require("bcrypt"));
let UserPasswordResolver = class UserPasswordResolver {
    async changePassword(data, ctx) {
        if (!data || !data.newpass || !data.oldpass) {
            return {
                status: false,
                message: "Invalid Data !"
            };
        }
        const user = await User_1.User.findOne({ where: { id: ctx.payload.userID } });
        if (!user) {
            return {
                status: false,
                message: "User Not Found !"
            };
        }
        const verify = await bcrypt_1.default.compare(data.newpass, user.password);
        if (!verify) {
            return {
                status: false,
                message: "Invaid Password !"
            };
        }
        user.password = await bcrypt_1.default.hash(data.newpass, 5);
        await user.save();
        return {
            status: true,
            message: "Your password has been changed !"
        };
    }
};
__decorate([
    (0, type_graphql_1.UseMiddleware)(middlewares_1.isUserAuth),
    (0, type_graphql_1.Mutation)(() => auth_2.ChangePasswordResponse),
    __param(0, (0, type_graphql_1.Arg)('data')),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_1.ChangePasswordInput, Object]),
    __metadata("design:returntype", Promise)
], UserPasswordResolver.prototype, "changePassword", null);
UserPasswordResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], UserPasswordResolver);
exports.UserPasswordResolver = UserPasswordResolver;
//# sourceMappingURL=password.resolver.js.map