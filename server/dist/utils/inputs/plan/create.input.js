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
exports.CreatePlanInput = void 0;
const type_graphql_1 = require("type-graphql");
let CreatePlanInput = class CreatePlanInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreatePlanInput.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [PlanElements]),
    __metadata("design:type", Array)
], CreatePlanInput.prototype, "elements", void 0);
CreatePlanInput = __decorate([
    (0, type_graphql_1.InputType)()
], CreatePlanInput);
exports.CreatePlanInput = CreatePlanInput;
let PlanElements = class PlanElements {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], PlanElements.prototype, "nutrition_id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], PlanElements.prototype, "quantity", void 0);
PlanElements = __decorate([
    (0, type_graphql_1.InputType)()
], PlanElements);
//# sourceMappingURL=create.input.js.map