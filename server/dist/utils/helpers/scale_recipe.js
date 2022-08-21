"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scaleRecipe = void 0;
const scale = (amount, target, serving) => {
    console.log("scale to this =>> ", (amount * target) / serving);
    return (amount * target) / serving;
};
const scaleRecipe = (servings, target, ingredients) => {
    if (servings === target)
        return ingredients;
    console.log("scale recipe sevings :::: ", servings);
    const results = ingredients.map((ing) => {
        return Object.assign(Object.assign({}, ing), { amount: scale(ing.amount || 0, target, servings) });
    });
    return results;
};
exports.scaleRecipe = scaleRecipe;
//# sourceMappingURL=scale_recipe.js.map