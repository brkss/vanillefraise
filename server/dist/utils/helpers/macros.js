"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTDEE = exports.calculateREE = void 0;
const calculateREE = (gender, weight, height, birth) => {
    const age = getAge(birth);
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
const getAge = (dateString) => {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
};
//# sourceMappingURL=macros.js.map