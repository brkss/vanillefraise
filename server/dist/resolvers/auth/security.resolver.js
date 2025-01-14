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
exports.SecurityResolver = void 0;
const type_graphql_1 = require("type-graphql");
const responses_1 = require("../../utils/responses");
const token_1 = require("../../utils/token");
const token_2 = require("../../utils/token");
const User_1 = require("../../entity/User");
const resetpassword_input_1 = require("../../utils/inputs/auth/resetpassword.input");
const bcrypt_1 = require("bcrypt");
const ResetPassword_1 = require("../../entity/ResetPassword");
const middlewares_1 = require("../../utils/middlewares");
const helpers_1 = require("../../utils/helpers");
let SecurityResolver = class SecurityResolver {
    work() {
        return "yes !";
    }
    async isAccountVerified(ctx) {
        const user = await User_1.User.findOne({ where: { id: ctx.payload.userID } });
        if (!user)
            return { status: false, message: "User not found !", title: "" };
        const title = user.verified ? "" : "Welcome to the party 🎉";
        const msg = user.verified
            ? ""
            : "But first please verify your email ! you'll find a email in your inbox with a link to verify your account.";
        return { status: user.verified, message: msg, title: title };
    }
    async resendAccountVerification(ctx) {
        const user = await User_1.User.findOne({ where: { id: ctx.payload.userID } });
        if (!user) {
            return {
                status: false,
                message: "Invalid User",
            };
        }
        if (user.verified) {
            return {
                status: true,
                message: "Your Account Is Already Verified !",
            };
        }
        const _token = (0, token_1.generateAccountVerificationToken)(user);
        await (0, helpers_1.mg_verify_account)(user, _token);
        return {
            status: true,
            message: `Verification Link sent successfuly to ${user.email}`,
        };
    }
    async verifyAccount(token) {
        if (!token) {
            return {
                status: false,
                message: "Invalid Token",
            };
        }
        const userId = (0, token_2.verifyAccountVerificationToken)(token);
        if (!userId) {
            return {
                status: false,
                message: "Invalid Token :<",
            };
        }
        const user = await User_1.User.findOne({ where: { id: userId } });
        if (!user) {
            return {
                status: false,
                message: "Invalid User !",
            };
        }
        if (user.verified) {
            return {
                status: true,
                message: "Your Account is Already Verified !",
            };
        }
        user.verified = true;
        await user.save();
        return {
            status: true,
            message: "Your account is now active. Thank you for using Vanille Fraise !",
        };
    }
    async verifyResetToken(token) {
        if (!token) {
            return {
                status: false,
                message: "TOKEN not found",
            };
        }
        const vrf = await (0, token_1.verifyPasswordToken)(token);
        if (!vrf.status)
            return {
                status: false,
                message: "invalid token",
            };
        return {
            status: true,
            user: vrf.user,
        };
    }
    async requestResetPassword(email) {
        if (!email) {
            return {
                status: false,
                message: "Invalid Data !",
            };
        }
        try {
            const user = await User_1.User.findOne({ where: { email: email } });
            if (!user) {
                return {
                    status: false,
                    message: "Invalid Email !",
                };
            }
            const resetRecord = new ResetPassword_1.ResetPassword();
            resetRecord.user = user;
            await resetRecord.save();
            const _token = (0, token_1.createResetPasswordToken)(user, resetRecord);
            await (0, helpers_1.mg_reset_password_email)(user, _token);
            return {
                status: true,
                message: "Token created successfuly",
            };
        }
        catch (e) {
            console.log("Something went wrong ! => ", e);
            return {
                status: false,
                message: `Something went wrong ! ${e}`,
            };
        }
    }
    async resetPassword(data, ctx) {
        if (!data.newPassword || !data.token) {
            return {
                status: false,
                message: "Invalid Data !",
            };
        }
        try {
            const vrf = await (0, token_1.verifyPasswordToken)(data.token);
            if (!vrf.status) {
                return {
                    status: false,
                    message: "Invalid Token",
                };
            }
            const user = vrf.user;
            const record = vrf.record;
            if (!user || !record) {
                return {
                    status: false,
                    message: "User not found !",
                };
            }
            user.version = user.version + 1;
            user.password = await (0, bcrypt_1.hash)(data.newPassword, 5);
            await user.save();
            record.expired = true;
            await record.save();
            (0, token_2.sendRefreshToken)(ctx.res, (0, token_2.generateRefreshToken)(user));
            return {
                status: true,
                token: (0, token_2.generateAccessToken)(user),
            };
        }
        catch (e) {
            console.log("Something went wrong trying to reset this user password !", e);
            return {
                status: false,
                message: "Something went wrong !",
            };
        }
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SecurityResolver.prototype, "work", null);
__decorate([
    (0, type_graphql_1.UseMiddleware)(middlewares_1.isUserAuth),
    (0, type_graphql_1.Query)(() => responses_1.IsAccountVerifiedResponse),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SecurityResolver.prototype, "isAccountVerified", null);
__decorate([
    (0, type_graphql_1.UseMiddleware)(middlewares_1.isUserAuth),
    (0, type_graphql_1.Mutation)(() => responses_1.DefaultResponse),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SecurityResolver.prototype, "resendAccountVerification", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => responses_1.DefaultResponse),
    __param(0, (0, type_graphql_1.Arg)("token")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SecurityResolver.prototype, "verifyAccount", null);
__decorate([
    (0, type_graphql_1.Query)(() => responses_1.VerifyResetPasswordTokenResponse),
    __param(0, (0, type_graphql_1.Arg)("token")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SecurityResolver.prototype, "verifyResetToken", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => responses_1.AuthDefaultResponse),
    __param(0, (0, type_graphql_1.Arg)("email")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SecurityResolver.prototype, "requestResetPassword", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => responses_1.AuthDefaultResponse),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [resetpassword_input_1.ResetPasswordInput, Object]),
    __metadata("design:returntype", Promise)
], SecurityResolver.prototype, "resetPassword", null);
SecurityResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], SecurityResolver);
exports.SecurityResolver = SecurityResolver;
//# sourceMappingURL=security.resolver.js.map