"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRecommnededAmount = void 0;
const Recomendation_1 = require("../../../entity/recomendation/Recomendation");
const user_1 = require("../user");
const typeorm_1 = require("typeorm");
const getRecommnededAmount = async (user, code) => {
    const meta = {
        gender: user.gender,
        age: (0, user_1.getAge)(user.birth),
    };
    const recommended = await (0, typeorm_1.getRepository)(Recomendation_1.NutritionRecomendation).findOne({
        ageStart: (0, typeorm_1.LessThanOrEqual)(meta.age),
        ageEnd: (0, typeorm_1.MoreThanOrEqual)(meta.age),
        population: meta.gender,
        code: code,
    });
    return (recommended === null || recommended === void 0 ? void 0 : recommended.quantity) || -1;
};
exports.getRecommnededAmount = getRecommnededAmount;
//# sourceMappingURL=getRecommendedAmount.js.map