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
exports.DietDataResolver = void 0;
const type_graphql_1 = require("type-graphql");
const HealthLabelReference_1 = require("../../entity/Nutrition/HealthLabelReference");
let DietDataResolver = class DietDataResolver {
    helloDietData() {
        return "hello from diet data !";
    }
    async healthLabels() {
        const hl = await HealthLabelReference_1.HealthLabelRefrence.find();
        return hl;
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
DietDataResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], DietDataResolver);
exports.DietDataResolver = DietDataResolver;
//# sourceMappingURL=data.resolver.js.map