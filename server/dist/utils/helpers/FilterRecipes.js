"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkFilter = exports.filterRecipes = void 0;
const Diet_1 = require("../../entity/Diet");
const filterRecipes = async (recipes, user) => {
    let data = [];
    const filters = await Diet_1.DietFoodFilter.find({
        where: { user: user },
        relations: ["healthlabel"],
    });
    if (filters.length === 0)
        return recipes;
    for (let r of recipes) {
        if ((0, exports.checkFilter)(r, filters))
            data.push(r);
    }
    return data;
};
exports.filterRecipes = filterRecipes;
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
//# sourceMappingURL=FilterRecipes.js.map