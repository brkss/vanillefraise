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
exports.HealthLabelsResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Nutrition_1 = require("../../entity/Nutrition");
const healthlabels_1 = require("../../utils/data/nutrition/healthlabels");
let HealthLabelsResolver = class HealthLabelsResolver {
    async seedHealthLabelRefrence() {
        const hlr = await Nutrition_1.HealthLabelRefrence.find();
        if (hlr.length > 0)
            return false;
        const data = (0, healthlabels_1.get_data)();
        for (let el of data) {
            const hr = new Nutrition_1.HealthLabelRefrence();
            hr.label = el.label.split("-").join(" ").toUpperCase();
            hr.description = el.def;
            hr.param = el.param;
            await hr.save();
        }
        return true;
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HealthLabelsResolver.prototype, "seedHealthLabelRefrence", null);
HealthLabelsResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], HealthLabelsResolver);
exports.HealthLabelsResolver = HealthLabelsResolver;
//# sourceMappingURL=healthlabels.resolver.js.map