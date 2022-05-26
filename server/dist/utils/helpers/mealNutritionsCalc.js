"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateNutrients = exports.calculate_domination_in_meal = void 0;
const convert_units_1 = __importDefault(require("convert-units"));
const calculate_domination_in_meal = (nutritients) => {
    let total = 0;
    for (let n of nutritients) {
        total += n.quantity;
    }
    console.log("total : ", total);
    const data = nutritients.map((n) => {
        let percent = 0;
        if (n.quantity > 0)
            percent = (n.quantity * 100) / total;
        return Object.assign(Object.assign({}, n), { quantity: Math.floor(percent) });
    });
    return data;
};
exports.calculate_domination_in_meal = calculate_domination_in_meal;
const calculateNutrients = (nutritients) => {
    const data = nutritients.map((n) => {
        let val = 0;
        if (n.unit === "kcal") {
            val = n.quantity * 0.129598;
        }
        else {
            val = (0, convert_units_1.default)(n.quantity)
                .from(n.unit === "µg" ? "mcg" : n.unit)
                .to("g");
        }
        return Object.assign(Object.assign({}, n), { quantity: val, unit: "g" });
    });
    return (0, exports.calculate_domination_in_meal)(data);
};
exports.calculateNutrients = calculateNutrients;
//# sourceMappingURL=mealNutritionsCalc.js.map