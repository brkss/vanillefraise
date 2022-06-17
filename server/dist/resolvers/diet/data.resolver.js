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
exports.DietDataResolver = void 0;
const type_graphql_1 = require("type-graphql");
const HealthLabelReference_1 = require("../../entity/Nutrition/HealthLabelReference");
const UserInfo_1 = require("../../entity/UserInfo");
const middlewares_1 = require("../../utils/middlewares");
const User_1 = require("../../entity/User");
const diet_1 = require("../../utils/responses/diet");
const Record_1 = require("../../entity/Diet/Record");
const dayjs_1 = __importDefault(require("dayjs"));
const macros_1 = require("../../utils/helpers/macros");
let DietDataResolver = class DietDataResolver {
    helloDietData() {
        return "hello from diet data !";
    }
    async healthLabels() {
        const hl = await HealthLabelReference_1.HealthLabelRefrence.find();
        return hl;
    }
    async trackCalories(ctx) {
        var _a;
        const user = await User_1.User.findOne({
            where: { id: ctx.payload.userID },
            relations: ["config"],
        });
        if (!user)
            return [];
        const cooked_recipes = await UserInfo_1.CookedRecipe.find({
            where: { user: user },
            relations: ["recipe", "recipe.totalnutrition"],
            order: { created_at: "ASC" },
        });
        const records = await Record_1.DietRecord.find({
            where: { user: user, type: "IN_CALORIES" },
        });
        let data = [];
        for (let cr of cooked_recipes) {
            data.push({
                value: ((_a = cr.recipe.totalnutrition.find((x) => x.code === "ENERC_KCAL")) === null || _a === void 0 ? void 0 : _a.quantity) || 0,
                date: cr.created_at,
            });
        }
        for (let r of records) {
            data.push({
                date: r.created_at,
                value: r.value,
            });
        }
        let res = [];
        let l = data.length;
        for (let i = 0; i < l; i++) {
            const index = res.findIndex((x) => (0, dayjs_1.default)(x.date).diff(data[i].date, "d") === 0);
            if (index === -1) {
                res.push(Object.assign({}, data[i]));
            }
            else if (index > -1) {
                res[index].value += data[i].value;
            }
        }
        const ree = (0, macros_1.calculateREE)(user.gender, user.weight, user.height, user.birth);
        const tdee = (0, macros_1.calculateTDEE)(user.config.activityFactor, ree);
        res = res.map((r) => ({
            date: r.date,
            value: r.value - tdee,
        }));
        res.unshift({ date: new Date(), value: 0 });
        return res;
    }
    async trackWeight(ctx) {
        const user = await User_1.User.findOne({ where: { id: ctx.payload.userID } });
        if (!user)
            return [];
        const records = await Record_1.DietRecord.find({ where: { user: user } });
        const data = [];
        for (let r of records) {
            if (r.type === "WEIGHT")
                data.push(r.value);
        }
        return data;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], DietDataResolver.prototype, "helloDietData", null);
__decorate([
    (0, type_graphql_1.Query)(() => [HealthLabelReference_1.HealthLabelRefrence]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DietDataResolver.prototype, "healthLabels", null);
__decorate([
    (0, type_graphql_1.UseMiddleware)(middlewares_1.isUserAuth),
    (0, type_graphql_1.Query)(() => [diet_1.CaloriesTrackResponse]),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DietDataResolver.prototype, "trackCalories", null);
__decorate([
    (0, type_graphql_1.UseMiddleware)(middlewares_1.isUserAuth),
    (0, type_graphql_1.Query)(() => [Number]),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DietDataResolver.prototype, "trackWeight", null);
DietDataResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], DietDataResolver);
exports.DietDataResolver = DietDataResolver;
//# sourceMappingURL=data.resolver.js.map