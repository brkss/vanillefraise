"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateNutrients = void 0;
const convert_units_1 = __importDefault(require("convert-units"));
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
    console.log("rs : ", data);
    return data;
};
exports.calculateNutrients = calculateNutrients;
//# sourceMappingURL=mealNutritionsCalc.js.map