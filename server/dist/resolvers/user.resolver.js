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
exports.UserResolver = void 0;
const type_graphql_1 = require("type-graphql");
const responses_1 = require("../utils/responses");
const inputs_1 = require("../utils/inputs");
const User_1 = require("../entity/User");
const UserInfo_1 = require("../entity/UserInfo");
const bcrypt_1 = require("bcrypt");
const token_1 = require("../utils/token");
const middlewares_1 = require("../utils/middlewares");
const auth_1 = require("../utils/inputs/auth");
const auth_2 = require("../utils/responses/auth");
const helpers_1 = require("../utils/helpers");
const helpers_2 = require("../utils/helpers");
let UserResolver = class UserResolver {
    ping() {
        return "pong";
    }
    async checkInfoValidity(data) {
        if (!data ||
            !data.email ||
            !data.username ||
            !(0, helpers_1.validateEmail)(data.email) ||
            !(0, helpers_1.validateUsername)(data.username)) {
            return {
                email: false,
                username: false,
            };
        }
        const response = {
            email: false,
            username: false,
        };
        const userEmail = await User_1.User.find({ where: { email: data.email } });
        const userUsername = await User_1.User.find({
            where: { username: (0, helpers_1.formatUsername)(data.username) },
        });
        if (userEmail.length == 0)
            response.email = true;
        if (userUsername.length == 0)
            response.username = true;
        return response;
    }
    async login(data, { res }) {
        if (!data.email || !data.password)
            return {
                status: false,
                message: "Invalid Data !",
            };
        const user = await User_1.User.findOne({
            where: [
                { email: data.email.toLowerCase() },
                { username: data.email.toLowerCase() },
            ],
        });
        if (!user) {
            return {
                status: false,
                message: "User not found !",
            };
        }
        if (user.banned) {
            return {
                status: false,
                message: "This account is banned !",
            };
        }
        const valid = await (0, bcrypt_1.compare)(data.password, user.password);
        if (!valid) {
            return {
                status: false,
                message: "wrong password !",
            };
        }
        const refreshToken = (0, token_1.generateRefreshToken)(user);
        (0, token_1.sendRefreshToken)(res, refreshToken);
        return {
            status: true,
            message: "Login successfuly",
            token: (0, token_1.generateAccessToken)(user),
            rToken: refreshToken,
        };
    }
    async register(data, { res }) {
        if (!data.name ||
            !data.email ||
            !data.password ||
            !data.username ||
            !data.birth ||
            !data.bmi ||
            !data.gender ||
            !data.height ||
            !data.weight ||
            !(0, helpers_1.validateEmail)(data.email) ||
            !(0, helpers_1.validateUsername)(data.username)) {
            return {
                status: false,
                message: "Invalid Data !",
            };
        }
        try {
            const user = new User_1.User();
            user.name = data.name;
            user.email = data.email.toLowerCase();
            user.username = (0, helpers_1.formatUsername)(data.username.toLowerCase());
            user.password = await (0, bcrypt_1.hash)(data.password, 5);
            user.weight = data.weight;
            user.height = data.height;
            user.gender = data.gender;
            user.bmi = data.bmi;
            user.birth = data.birth;
            const sc = [];
            for (let s of data.sc) {
                const condition = await UserInfo_1.SpecialCondition.findOne({ where: { id: s } });
                if (condition)
                    sc.push(condition);
            }
            if (sc.length !== data.sc.length) {
                return {
                    status: false,
                    message: "Some special conditions were not found ! ",
                };
            }
            user.specialconditions = sc;
            await user.save();
            const _verificationToken = (0, token_1.generateAccountVerificationToken)(user);
            (0, helpers_2.mg_verify_account)(user, _verificationToken);
            const refreshToken = (0, token_1.generateRefreshToken)(user);
            (0, token_1.sendRefreshToken)(res, refreshToken);
            return {
                status: true,
                message: "User created successfuly !",
                token: (0, token_1.generateAccessToken)(user),
                rToken: refreshToken,
            };
        }
        catch (e) {
            console.log("something went wrong ! ", e);
            if (e.code == "ER_DUP_ENTRY") {
                let cause = "";
                const user = await User_1.User.findOne({ where: { username: data.username } });
                if (user)
                    cause = "username";
                else
                    cause = "email";
                return {
                    status: false,
                    message: `This ${cause} already exist !`,
                };
            }
            return {
                status: false,
                message: "Sonrthing went wrong !",
            };
        }
    }
    async logout(ctx) {
        ctx.res.clearCookie("uid");
        return {
            status: true,
        };
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "ping", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => auth_2.UserInfoValidityResponse),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_1.UserInfoValidtyInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "checkInfoValidity", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => responses_1.AuthDefaultResponse),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inputs_1.LoginInput, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "login", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => responses_1.AuthDefaultResponse),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inputs_1.RegisterInput, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "register", null);
__decorate([
    (0, type_graphql_1.UseMiddleware)(middlewares_1.isUserAuth),
    (0, type_graphql_1.Mutation)(() => responses_1.AuthDefaultResponse),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "logout", null);
UserResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.resolver.js.map