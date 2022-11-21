"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokenNutrition = void 0;
const CookedRecipe_1 = require("../../../entity/UserInfo/CookedRecipe");
const getTokenNutrition = async (user, code) => {
    if (!user || !code)
        return -1;
    const cookedRecipes = await CookedRecipe_1.CookedRecipe.find({
        where: { user: user },
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