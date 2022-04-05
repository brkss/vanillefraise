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
exports.SeedNutritionRecomendationResolver = void 0;
const type_graphql_1 = require("type-graphql");
const manage_1 = require("../../utils/data/nutrition/manage");
const Nutrition_1 = require("../../entity/Nutrition");
const typeorm_1 = require("typeorm");
const Recomendation_1 = require("../../entity/recomendation/Recomendation");
let SeedNutritionRecomendationResolver = class SeedNutritionRecomendationResolver {
    async seedRecomendation() {
        const recomendations = await Recomendation_1.NutritionRecomendation.find();
        if (recomendations.length == 0) {
            const notfound = [];
            const data = (0, manage_1.getData)();
            let i = 0;
            for (let d of data) {
                const nutrition = await (0, typeorm_1.getRepository)(Nutrition_1.Nutrition).findOne({
                    name: (0, typeorm_1.Like)(`%${d.name}%`),
                });
                if (nutrition) {
                    d.code = nutrition.code;
                    d.unit = nutrition.unit;
                    const recoms = new Recomendation_1.NutritionRecomendation();
                    recoms.name = d.name;
                    recoms.unit = d.unit;
                    recoms.code = d.code;
                    recoms.ageEnd = d.ageEnd;
                    recoms.ageStart = d.ageStart;
                    recoms.population = d.population;
                    recoms.quantity = d.quantity;
                    await recoms.save();
                }
                else if (!notfound.includes(d.name)) {
                    notfound.push(d.name);
                    i++;
                    console.log(`${d.name} : NUTRITION NOT FOUND`);
                }
            }
            console.log(`${i}/${data.length} Nutrition not found !`);
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
], SeedNutritionRecomendationResolver.prototype, "seedRecomendation", null);
SeedNutritionRecomendationResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], SeedNutritionRecomendationResolver);
exports.SeedNutritionRecomendationResolver = SeedNutritionRecomendationResolver;
//# sourceMappingURL=seed.resolver.js.map