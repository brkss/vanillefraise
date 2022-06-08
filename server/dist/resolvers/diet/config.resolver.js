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
exports.DietConfigResolver = void 0;
const type_graphql_1 = require("type-graphql");
const auth_mw_1 = require("../../utils/middlewares/auth.mw");
const default_response_1 = require("../../utils/responses/default.response");
const inputs_1 = require("../../utils/inputs");
const Diet_1 = require("../../entity/Diet");
let DietConfigResolver = class DietConfigResolver {
    async configDiet(data) {
        if (!data || !data.activity_factor) {
            return {
                status: false,
                message: "Invalid Data !"
            };
        }
        try {
            const mc = new Diet_1.MacrosConfig();
            mc.activityFactor = data.activity_factor;
            mc.carbs = data.carbs;
            mc.fat = data.fat;
            mc.protein = data.protein;
            await mc.save();
            return {
                status: true,
                message: "Diet Configed Successfuly !"
            };
        }
        catch (e) {
            console.log("Sonething went wrong ! ", e);
            return {
                status: false,
                message: "Something went wrong !"
            };
        }
    }
};
__decorate([
    (0, type_graphql_1.UseMiddleware)(auth_mw_1.isUserAuth),
    (0, type_graphql_1.Mutation)(() => default_response_1.DefaultResponse),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inputs_1.ConfigDietInput]),
    __metadata("design:returntype", Promise)
], DietConfigResolver.prototype, "configDiet", null);
DietConfigResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], DietConfigResolver);
exports.DietConfigResolver = DietConfigResolver;
//# sourceMappingURL=config.resolver.js.map