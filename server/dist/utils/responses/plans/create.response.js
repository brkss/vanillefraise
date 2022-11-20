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
exports.CreatePlanResponse = void 0;
const type_graphql_1 = require("type-graphql");
const Plan_1 = require("../../../entity/Plan");
let CreatePlanResponse = class CreatePlanResponse {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Boolean)
], CreatePlanResponse.prototype, "status", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreatePlanResponse.prototype, "message", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Plan_1.Plan, { nullable: true }),
    __metadata("design:type", Plan_1.Plan)
], CreatePlanResponse.prototype, "plan", void 0);
CreatePlanResponse = __decorate([
    (0, type_graphql_1.ObjectType)()
], CreatePlanResponse);
exports.CreatePlanResponse = CreatePlanResponse;
//# sourceMappingURL=create.response.js.map