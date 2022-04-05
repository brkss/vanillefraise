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
exports.CreateMealsResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Meal_1 = require("../../entity/Meals/Meal");
const meals_data = [
    {
        name: "Breakfast",
        index: 1,
    },
    {
        name: "Lunch",
        index: 2,
    },
    {
        name: "Dinner",
        index: 3
    }
];
let CreateMealsResolver = class CreateMealsResolver {
    async seedMeals() {
        const meals = await Meal_1.Meal.find();
        if (meals.length == 0) {
            for (let m of meals_data) {
                const meal = new Meal_1.Meal();
                meal.name = m.name;
                meal.index = m.index;
                await meal.save();
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
], CreateMealsResolver.prototype, "seedMeals", null);
CreateMealsResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], CreateMealsResolver);
exports.CreateMealsResolver = CreateMealsResolver;
//# sourceMappingURL=seed.resolver.js.map