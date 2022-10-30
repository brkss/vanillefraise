"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTDEE = exports.calculateREE = void 0;
const getAge_1 = require("./getAge");
const calculateREE = (gender, weight, height, birth) => {
    const age = (0, getAge_1.getAge)(birth);
    let res = 0;
    if (gender === "MALE")
        res = 10 * weight + 6.25 * height - 5 * age + 5;
    else if (gender === "FEMALE")
        res = 10 * weight + 6.25 * height - 5 * age - 161;
    return Math.floor(res);
};
exports.calculateREE = calculateREE;
const calculateTDEE = (activity, ree) => {
    return Math.floor(ree * activity);
};
exports.calculateTDEE = calculateTDEE;
//# sourceMappingURL=macros.js.map