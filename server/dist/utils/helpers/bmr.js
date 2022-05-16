"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcBMR = void 0;
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
const calcBMR = (birth, weight, height, gender) => {
    let BMR = 1;
    if (gender == "MALE") {
        BMR = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * getAge(birth);
    }
    else if (gender == "FEMALE") {
        BMR = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * getAge(birth);
    }
    return Math.floor(BMR);
};
exports.calcBMR = calcBMR;
//# sourceMappingURL=bmr.js.map