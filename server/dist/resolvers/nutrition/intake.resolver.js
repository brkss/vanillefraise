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
exports.NutritionIntakeResolver = void 0;
const type_graphql_1 = require("type-graphql");
const User_1 = require("../../entity/User");
const auth_mw_1 = require("../../utils/middlewares/auth.mw");
const intake_response_1 = require("../../utils/responses/nutrition/intake.response");
const UserInfo_1 = require("../../entity/UserInfo");
const typeorm_1 = require("typeorm");
const dayjs_1 = __importDefault(require("dayjs"));
const Nutrition_1 = require("../../entity/Nutrition");
const getAge_1 = require("../../utils/helpers/getAge");
const macros_1 = require("../../utils/helpers/macros");
const Recomendation_1 = require("../../entity/recomendation/Recomendation");
let NutritionIntakeResolver = class NutritionIntakeResolver {
    async nutritionCategoryIntake(ctx) {
        const user = await User_1.User.findOne({ where: { id: ctx.payload.userID } });
        console.log("user :", user);
        if (!user)
            return {
                categories: [],
            };
        const meta = {
            gender: user.gender,
            age: (0, getAge_1.getAge)(user.birth),
        };
        const cooked = await UserInfo_1.CookedRecipe.find({
            where: {
                user: user,
                created_at: (0, typeorm_1.Like)(`%${(0, dayjs_1.default)().format("YYYY-MM-DD")}%`),
            },
            relations: ["recipe", "recipe.totalnutrition"],
        });
        const nutritions = [];
        for (let c of cooked) {
            for (let n of c.recipe.totalnutrition) {
                const index = nutritions.findIndex((x) => x.code === n.code);
                if (index === -1) {
                    const recomendation = await (0, typeorm_1.getRepository)(Recomendation_1.NutritionRecomendation).findOne({
                        ageStart: (0, typeorm_1.LessThanOrEqual)(meta.age),
                        ageEnd: (0, typeorm_1.MoreThanOrEqual)(meta.age),
                        population: meta.gender,
                        code: n.code,
                    });
                    const nutrition = await Nutrition_1.Nutrition.findOne({
                        where: { code: n.code },
                        relations: ["category"],
                    });
                    nutritions.push({
                        code: n.code,
                        quantity: n.quantity,
                        recomendation: (recomendation === null || recomendation === void 0 ? void 0 : recomendation.quantity) || 1,
                        intake: 0,
                        categoryId: (nutrition === null || nutrition === void 0 ? void 0 : nutrition.category.id) || "",
                    });
                }
                else {
                    nutritions[index].quantity += n.quantity;
                }
            }
        }
        for (let nutrition of nutritions) {
            if (nutrition.code === "ENERC_KCAL")
                nutrition.intake = nutrition.quantity;
            else
                nutrition.intake =
                    nutrition.recomendation === -1
                        ? -1
                        : (nutrition.quantity * 100) / nutrition.recomendation;
        }
        const categories = await Nutrition_1.NutritienCategory.find({
            relations: ["nutrients"],
        });
        const results = [];
        for (let category of categories) {
            let count = 0;
            let intake = 0;
            for (let nutrition of nutritions) {
                if (nutrition.categoryId === category.id) {
                    count++;
                    intake += nutrition.intake;
                }
            }
            results.push({
                id: category.id,
                intake: count === 0 ? 0 : intake / count,
                name: category.name,
            });
        }
        for (let i = 0; i < results.length; i++) {
            if (results[i].name === "Energy") {
                const ree = (0, macros_1.calculateREE)(user.gender, user.weight, user.height, user.birth);
                results[i].intake = (results[i].intake * 100) / ree;
            }
        }
        return {
            categories: results,
        };
    }
};
__decorate([
    (0, type_graphql_1.UseMiddleware)(auth_mw_1.isUserAuth),
    (0, type_graphql_1.Query)(() => intake_response_1.DailyNutritionIntakeResponse),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NutritionIntakeResolver.prototype, "nutritionCategoryIntake", null);
NutritionIntakeResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], NutritionIntakeResolver);
exports.NutritionIntakeResolver = NutritionIntakeResolver;
//# sourceMappingURL=intake.resolver.js.map