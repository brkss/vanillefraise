"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokenNutrition = void 0;
const CookedRecipe_1 = require("../../../entity/UserInfo/CookedRecipe");
const dayjs_1 = __importDefault(require("dayjs"));
const typeorm_1 = require("typeorm");
const getTokenNutrition = async (user, code, date) => {
    if (!user || !code)
        return -1;
    const cookedRecipes = await CookedRecipe_1.CookedRecipe.find({
        where: {
            user: user,
            created_at: (0, typeorm_1.Like)(`%${(0, dayjs_1.default)(date || new Date()).format("YYYY-MM-DD")}%`),
        },
        relations: ["recipe", "recipe.totalnutrition"],
    });
    let results = 0;
    for (let cr of cookedRecipes) {
        for (let nr of cr.recipe.totalnutrition) {
            if (nr.code === code) {
                results += nr.quantity;
            }
        }
    }
    return results;
};
exports.getTokenNutrition = getTokenNutrition;
//# sourceMappingURL=getTokenNutrition.js.map