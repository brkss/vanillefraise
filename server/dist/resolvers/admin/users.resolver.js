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
exports.AdminUserResolver = void 0;
const responses_1 = require("src/utils/responses");
const type_graphql_1 = require("type-graphql");
const User_1 = require("../../entity/User");
const admin_mw_1 = require("../../utils/middlewares/admin.mw");
const admin_1 = require("../../utils/responses/admin");
let AdminUserResolver = class AdminUserResolver {
    async adminGetUsers() {
        const users = await User_1.User.find();
        let data = [];
        for (let u of users) {
            const obj = {
                user: u,
            };
            data.push(obj);
        }
        return data;
    }
    async deleteUser(uid) {
        if (!uid) {
            return {
                status: false,
                message: "Invalid User ID !"
            };
        }
        const user = await User_1.User.findOne({
            where: { id: uid }
        });
        if (!user) {
            return {
                status: false,
                message: "Invalid User !"
            };
        }
        try {
            await user.remove();
            return {
                status: true,
                message: "User deleted successfuly !"
            };
        }
        catch (e) {
            console.log("Something went wrong deleting user : ", e);
            return {
                status: false,
                message: "Something went wrong deleting user !"
            };
        }
    }
};
__decorate([
    (0, type_graphql_1.UseMiddleware)(admin_mw_1.isAdminAuth),
    (0, type_graphql_1.Query)(() => [admin_1.AdminUserResponse]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminUserResolver.prototype, "adminGetUsers", null);
__decorate([
    (0, type_graphql_1.UseMiddleware)(admin_mw_1.isAdminAuth),
    (0, type_graphql_1.Mutation)(() => responses_1.DefaultResponse),
    __param(0, (0, type_graphql_1.Arg)('uid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminUserResolver.prototype, "deleteUser", null);
AdminUserResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], AdminUserResolver);
exports.AdminUserResolver = AdminUserResolver;
//# sourceMappingURL=users.resolver.js.map