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
exports.NutritionIntakeResponse = void 0;
const type_graphql_1 = require("type-graphql");
let NutritionIntakeItem = class NutritionIntakeItem {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], NutritionIntakeItem.prototype, "quantity", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Date)
], NutritionIntakeItem.prototype, "date", void 0);
NutritionIntakeItem = __decorate([
    (0, type_graphql_1.ObjectType)()
], NutritionIntakeItem);
let NutritionIntakeResponse = class NutritionIntakeResponse {
};
__decorate([
    (0, type_graphql_1.Field)(() => [NutritionIntakeItem]),
    __metadata("design:type", Array)
], NutritionIntakeResponse.prototype, "data", void 0);
NutritionIntakeResponse = __decorate([
    (0, type_graphql_1.ObjectType)()
], NutritionIntakeResponse);
exports.NutritionIntakeResponse = NutritionIntakeResponse;
//# sourceMappingURL=nutritionintake.response.js.map