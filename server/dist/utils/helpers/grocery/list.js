"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groceryList = void 0;
const typeorm_1 = require("typeorm");
const groceryList = async () => {
    const ingredients = await (0, typeorm_1.createQueryBuilder)("ingredients")
        .select(["ingredients"])
        .distinct(true)
        .getRawMany();
    return ingredients;
};
exports.groceryList = groceryList;
//# sourceMappingURL=list.js.map