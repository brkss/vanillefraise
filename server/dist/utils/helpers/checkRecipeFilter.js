"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkFilter = void 0;
const checkFilter = (recipe, filters) => {
    for (let filter of filters) {
        for (let hl of recipe.healthlabel) {
            if (filter.healthlabel.id === hl.id)
                return true;
        }
    }
    return false;
};
exports.checkFilter = checkFilter;
//# sourceMappingURL=checkRecipeFilter.js.map