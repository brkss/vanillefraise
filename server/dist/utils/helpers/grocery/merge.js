"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeIngredients = void 0;
const mergeIngredients = (ingredients) => {
    const merged = [];
    for (let ing of ingredients) {
        const index = merged.findIndex((x) => x.ingredients === ing.ingredients && x.unit === ing.unit);
        if (index === -1) {
            merged.push(ing);
        }
        else {
            merged[index].amount = (merged[index].amount || 0) + (ing.amount || 0);
        }
    }
    return merged;
};
exports.mergeIngredients = mergeIngredients;
//# sourceMappingURL=merge.js.map