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
exports.SpecialConditionResolver = void 0;
const type_graphql_1 = require("type-graphql");
const UserInfo_1 = require("../../entity/UserInfo");
const specialconditions_data_1 = require("../../utils/data/specialconditions.data");
let SpecialConditionResolver = class SpecialConditionResolver {
    async seedSpecialConditions() {
        const sc = await UserInfo_1.SpecialCondition.find();
        if (sc.length == 0) {
            for (let s of specialconditions_data_1.specialconditions) {
                const condition = new UserInfo_1.SpecialCondition();
                condition.name = s;
                await condition.save();
            }
            return true;
        }
        return false;
    }
    async specialconditions() {
        return await UserInfo_1.SpecialCondition.find();
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SpecialConditionResolver.prototype, "seedSpecialConditions", null);
__decorate([
    (0, type_graphql_1.Query)(() => [UserInfo_1.SpecialCondition]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SpecialConditionResolver.prototype, "specialconditions", null);
SpecialConditionResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], SpecialConditionResolver);
exports.SpecialConditionResolver = SpecialConditionResolver;
//# sourceMappingURL=specialcondition.resolver.js.map