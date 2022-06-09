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
exports.DietConfigResponse = void 0;
const type_graphql_1 = require("type-graphql");
const Diet_1 = require("../../../entity/Diet");
let DietConfigResponse = class DietConfigResponse {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Boolean)
], DietConfigResponse.prototype, "status", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Diet_1.MacrosConfig, { nullable: true }),
    __metadata("design:type", Diet_1.MacrosConfig)
], DietConfigResponse.prototype, "config", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], DietConfigResponse.prototype, "filters", void 0);
DietConfigResponse = __decorate([
    (0, type_graphql_1.ObjectType)()
], DietConfigResponse);
exports.DietConfigResponse = DietConfigResponse;
//# sourceMappingURL=getconfig.response.js.map