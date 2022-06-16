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
exports.CaloriesTrackResponse = void 0;
const type_graphql_1 = require("type-graphql");
let CaloriesTrackResponse = class CaloriesTrackResponse {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], CaloriesTrackResponse.prototype, "value", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Date),
    __metadata("design:type", Date)
], CaloriesTrackResponse.prototype, "date", void 0);
CaloriesTrackResponse = __decorate([
    (0, type_graphql_1.ObjectType)()
], CaloriesTrackResponse);
exports.CaloriesTrackResponse = CaloriesTrackResponse;
//# sourceMappingURL=caloriestrack.response.js.map