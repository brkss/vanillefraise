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
const inputs_1 = require("../../utils/inputs");
const Diet_1 = require("../../entity/Diet");
const User_1 = require("../../entity/User");
const HealthLabelReference_1 = require("../../entity/Nutrition/HealthLabelReference");
const diet_1 = require("../../utils/responses/diet");
const macros_1 = require("../../utils/helpers/user/macros");
let DietConfigResolver = class DietConfigResolver {
    async configDiet(data, ctx) {
        if (!data || !data.activity_factor) {
            return {
                status: false,
                message: "Invalid Data !",
            };
        }
        const user = await User_1.User.findOne({ where: { id: ctx.payload.userID } });
        if (!user) {
            return {
                status: false,
                message: "Invalid User ! ",
            };
        }
        try {
            const exist = await Diet_1.MacrosConfig.findOne({ where: { user: user } });
            if (exist)
                await exist.remove();
            const mc = new Diet_1.MacrosConfig();
            mc.activityFactor = data.activity_factor;
            mc.carbs = data.carbs;
            mc.fat = data.fat;
            mc.protein = data.protein;
            mc.user = user;
            await mc.save();
            await Diet_1.DietFoodFilter.delete({ user: user });
            if (data.filters.length > 0) {
                for (let filter of data.filters) {
                    const label = await HealthLabelReference_1.HealthLabelRefrence.findOne({
                        where: { id: filter },
                    });
                    if (!label)
                        continue;
                    const ff = new Diet_1.DietFoodFilter();
                    ff.user = user;
                    ff.healthlabel = label;
                    await ff.save();
                }
            }
            const filters = await Diet_1.DietFoodFilter.find({
                where: { user: user },
                relations: ["healthlabel"],
            });
            if (user.weight !== data.weight)
                user.weight = data.weight;
            if (user.height !== data.height)
                user.height = data.height;
            await user.save();
            const ree = (0, macros_1.calculateREE)(user.gender, user.weight, user.height, user.birth);
            const tdee = (0, macros_1.calculateTDEE)(data.activity_factor, ree);
            return {
                status: true,
                message: "Diet Configed Successfuly !",
                data: {
                    status: true,
                    config: mc,
                    filters: filters.map((filter) => filter.healthlabel),
                },
                macros: {
                    status: true,
                    ree: ree,
                    tdee: tdee
                }
            };
        }
        catch (e) {
            console.log("Sonething went wrong ! ", e);
            return {
                status: false,
                message: "Something went wrong !",
            };
        }
    }
    async getDietConfig(ctx) {
        const user = await User_1.User.findOne({
            where: { id: ctx.payload.userID },
            relations: ["config"],
        });
        if (!user)
            return {
                status: false,
            };
        if (!user.config) {
            return {
                status: false,
            };
        }
        const filter = await Diet_1.DietFoodFilter.find({
            where: { user: user },
            relations: ["healthlabel"],
        });
        return {
            status: true,
            config: user.config,
            filters: filter.map((filter) => filter.healthlabel),
        };
    }
};
__decorate([
    (0, type_graphql_1.UseMiddleware)(auth_mw_1.isUserAuth),
    (0, type_graphql_1.Mutation)(() => diet_1.CreateDietConfigResponse),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inputs_1.ConfigDietInput, Object]),
    __metadata("design:returntype", Promise)
], DietConfigResolver.prototype, "configDiet", null);
__decorate([
    (0, type_graphql_1.UseMiddleware)(auth_mw_1.isUserAuth),
    (0, type_graphql_1.Query)(() => diet_1.DietConfigResponse),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DietConfigResolver.prototype, "getDietConfig", null);
DietConfigResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], DietConfigResolver);
exports.DietConfigResolver = DietConfigResolver;
//# sourceMappingURL=config.resolver.js.map