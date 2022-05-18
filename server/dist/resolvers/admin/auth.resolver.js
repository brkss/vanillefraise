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
exports.AdminAuthResolver = void 0;
const responses_1 = require("../../utils/responses");
const type_graphql_1 = require("type-graphql");
const inputs_1 = require("../../utils/inputs");
const bcrypt_1 = require("bcrypt");
const admin_1 = require("../../entity/admin");
const inputs_2 = require("../../utils/inputs");
let AdminAuthResolver = class AdminAuthResolver {
    helloAdmin() {
        return "Hello Yourself !";
    }
    async loginAdmin(data) {
        if (!data.username || !data.password) {
            return {
                status: false,
                message: "Invalid Data!",
            };
        }
        try {
            const admin = await admin_1.Admin.findOne({ where: { username: data.username } });
            if (!admin) {
                return {
                    status: false,
                    message: "Invalid username !",
                };
            }
            const valid = await (0, bcrypt_1.compare)(data.password, admin.password);
            if (!valid)
                return {
                    status: false,
                    message: "Invalid Passoword !",
                };
            return {
                status: true,
                message: "Login successfuly",
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
    async registerAdmin(data) {
        if (!data.username || !data.password)
            return {
                status: true,
                message: "Invalid Data !",
            };
        try {
            const admin = new admin_1.Admin();
            admin.email = data.email || undefined;
            admin.username = data.username;
            admin.password = await (0, bcrypt_1.hash)(data.password, 5);
            admin.name = data.name || undefined;
            await admin.save();
            return {
                status: true,
                message: "Admin Created successfuly ! ",
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
    (0, type_graphql_1.Query)(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminAuthResolver.prototype, "helloAdmin", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => responses_1.DefaultResponse),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inputs_2.LoginAdminInput]),
    __metadata("design:returntype", Promise)
], AdminAuthResolver.prototype, "loginAdmin", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => responses_1.DefaultResponse),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inputs_1.RegisterAdminInput]),
    __metadata("design:returntype", Promise)
], AdminAuthResolver.prototype, "registerAdmin", null);
AdminAuthResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], AdminAuthResolver);
exports.AdminAuthResolver = AdminAuthResolver;
//# sourceMappingURL=auth.resolver.js.map