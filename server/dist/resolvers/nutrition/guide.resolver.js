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
exports.NutritionGuideResolver = void 0;
const type_graphql_1 = require("type-graphql");
const nutrition_guides_1 = require("../../utils/data/nutrition_guides");
const Nutrition_1 = require("../../entity/Nutrition");
let NutritionGuideResolver = class NutritionGuideResolver {
    async seedNutritionGuide() {
        const guides = await Nutrition_1.Nutrition.find();
        if (guides.length == 0) {
            for (let ng of nutrition_guides_1.nutrition_guide) {
                const nutrition = new Nutrition_1.Nutrition();
                nutrition.name = ng.name;
                nutrition.code = ng.ntr_code;
                nutrition.unit = ng.unit;
                await nutrition.save();
            }
            return true;
        }
        return false;
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NutritionGuideResolver.prototype, "seedNutritionGuide", null);
NutritionGuideResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], NutritionGuideResolver);
exports.NutritionGuideResolver = NutritionGuideResolver;
//# sourceMappingURL=guide.resolver.js.map