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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyResetPasswordTokenResponse = void 0;
const type_graphql_1 = require("type-graphql");
const User_1 = require("../../../entity/User");
let VerifyResetPasswordTokenResponse = class VerifyResetPasswordTokenResponse {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Boolean)
], VerifyResetPasswordTokenResponse.prototype, "status", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], VerifyResetPasswordTokenResponse.prototype, "message", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => User_1.User, { nullable: true }),
    __metadata("design:type", User_1.User)
], VerifyResetPasswordTokenResponse.prototype, "user", void 0);
VerifyResetPasswordTokenResponse = __decorate([
    (0, type_graphql_1.ObjectType)()
], VerifyResetPasswordTokenResponse);
exports.VerifyResetPasswordTokenResponse = VerifyResetPasswordTokenResponse;
//# sourceMappingURL=verifyresettoken.response.js.map