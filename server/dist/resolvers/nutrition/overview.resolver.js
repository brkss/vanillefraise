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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NutritionOverviewResolver = void 0;
const type_graphql_1 = require("type-graphql");
const User_1 = require("../../entity/User");
const CookedRecipe_1 = require("../../entity/UserInfo/CookedRecipe");
const Recipe_1 = require("../../entity/Recipe");
const Nutrition_1 = require("../../entity/Nutrition");
const middlewares_1 = require("../../utils/middlewares");
const nutrition_1 = require("../../utils/responses/nutrition");
const Recomendation_1 = require("../../entity/recomendation/Recomendation");
const getAge_1 = require("../../utils/helpers/getAge");
const typeorm_1 = require("typeorm");
const calories_response_1 = require("../../utils/responses/nutrition/calories.response");
const dayjs_1 = __importDefault(require("dayjs"));
const Record_1 = require("../../entity/Diet/Record");
let NutritionOverviewResolver = class NutritionOverviewResolver {
    async userNutrition(ctx) {
        const user = await User_1.User.findOne({ where: { id: ctx.payload.userID } });
        if (!user) {
            return {
                status: false,
                message: "Invalid User !",
            };
        }
        const meta = {
            gender: user.gender,
            age: (0, getAge_1.getAge)(user.birth),
        };
        const nutrients = await Nutrition_1.Nutrition.find();
        const recipesNutrition = [];
        const cookedRecipes = await CookedRecipe_1.CookedRecipe.find({
            where: {
                user: user,
                created_at: (0, typeorm_1.Like)(`%${(0, dayjs_1.default)().format("YYYY-MM-DD")}%`),
            },
            relations: ["recipe"],
        });
        for (let cooked of cookedRecipes) {
            const nutrition = await Nutrition_1.RecipeTotalNutrition.find({
                where: { recipe: cooked.recipe },
            });
            recipesNutrition.push(...nutrition);
        }
        const results = nutrients.map((n) => {
            let quantity = 0;
            for (let rn of recipesNutrition) {
                if (rn.code == n.code) {
                    quantity += rn.quantity;
                }
            }
            return {
                name: n.name,
                code: n.code,
                quantity: quantity,
                unit: n.unit,
            };
        });
        console.log("Nutritients results : ", results);
        const rec = [];
        for (let res of results) {
            const nr = await (0, typeorm_1.getRepository)(Recomendation_1.NutritionRecomendation).findOne({
                ageStart: (0, typeorm_1.LessThanOrEqual)(meta.age),
                ageEnd: (0, typeorm_1.MoreThanOrEqual)(meta.age),
                population: meta.gender,
                code: res.code,
            });
            rec.push(Object.assign(Object.assign({}, res), { recomendation: (nr === null || nr === void 0 ? void 0 : nr.quantity) || -1 }));
        }
        console.log("RES : ", rec);
        return {
            status: true,
            data: rec,
        };
    }
    async userCalories(ctx) {
        const user = await User_1.User.findOne({ where: { id: ctx.payload.userID } });
        if (!user) {
            return {
                status: false,
                message: "User Not Found !",
            };
        }
        try {
            const target = user.bmi;
            const cookedRecipes = await CookedRecipe_1.CookedRecipe.find({
                where: {
                    user: user,
                    created_at: (0, typeorm_1.Like)(`%${(0, dayjs_1.default)().format("YYYY-MM-DD")}%`),
                },
                relations: ["recipe"],
            });
            let taken = 0;
            for (let cr of cookedRecipes) {
                const recipe = await Recipe_1.Recipe.findOne({ where: { id: cr.recipe.id } });
                const energy = await Nutrition_1.RecipeTotalNutrition.findOne({
                    where: { recipe: recipe, code: "ENERC_KCAL" },
                });
                if (energy)
                    taken += energy.quantity;
            }
            const records = await Record_1.DietRecord.find({
                where: {
                    user: user,
                    type: "IN_CALORIES",
                    created_at: (0, typeorm_1.Like)(`%${(0, dayjs_1.default)().format("YYYY-MM-DD")}%`),
                },
            });
            return {
                status: true,
                burnt: 0,
                target: target,
                value: taken + records.reduce((s, e) => s + e.value, 0),
                unit: "KCal",
            };
        }
        catch (e) {
            console.log("Something went wrong : ", e);
            return {
                status: false,
                message: "Something went wrong !",
            };
        }
    }
};
__decorate([
    (0, type_graphql_1.UseMiddleware)(middlewares_1.isUserAuth),
    (0, type_graphql_1.Query)(() => nutrition_1.NutritionOverviewResponse),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NutritionOverviewResolver.prototype, "userNutrition", null);
__decorate([
    (0, type_graphql_1.UseMiddleware)(middlewares_1.isUserAuth),
    (0, type_graphql_1.Query)(() => calories_response_1.UserCaloriesResponse),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NutritionOverviewResolver.prototype, "userCalories", null);
NutritionOverviewResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], NutritionOverviewResolver);
exports.NutritionOverviewResolver = NutritionOverviewResolver;
//# sourceMappingURL=overview.resolver.js.map