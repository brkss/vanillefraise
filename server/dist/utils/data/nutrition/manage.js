"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAgeRange = exports.getData = void 0;
const elements_1 = require("./elements");
const vitamins_1 = require("./vitamins");
const micronutrients_1 = require("./micronutrients");
const recs = [
    [
        ...JSON.parse(micronutrients_1.children_micronutrients_data),
        ...JSON.parse(micronutrients_1.pregnancy_micronutrients_data),
        ...JSON.parse(micronutrients_1.lactation_micronutrients_data),
        ...JSON.parse(micronutrients_1.male_micronutrients_data),
        ...JSON.parse(micronutrients_1.female_micronutrients_data),
    ],
    [
        ...JSON.parse(vitamins_1.children_vitamins_data),
        ...JSON.parse(vitamins_1.pregnancy_vitamins_data),
        ...JSON.parse(vitamins_1.lactation_vitamins_data),
        ...JSON.parse(vitamins_1.male_vitamins_data),
        ...JSON.parse(vitamins_1.female_vitamins_data),
    ],
    [
        ...JSON.parse(elements_1.children_elements_data),
        ...JSON.parse(elements_1.pregnancy_elements_data),
        ...JSON.parse(elements_1.lactation_elements_data),
        ...JSON.parse(elements_1.male_elements_data),
        ...JSON.parse(elements_1.female_elements_data),
    ],
];
const getData = () => {
    const data = (0, exports.getAgeRange)(recs);
    let results = [];
    data.forEach((d) => {
        const keys = Object.keys(d[0]);
        keys.splice(0, 1);
        keys.splice(keys.length - 3, keys.length - 1);
        console.log("key => ", keys);
        d.forEach((chunk) => {
            for (let key of keys) {
                const o = {
                    name: key,
                    code: null,
                    quantity: parseFloat(chunk[key].replace(',', '')) || -1,
                    unit: null,
                    population: chunk["gender"],
                    ageStart: Number(chunk["ageStart"]),
                    ageEnd: Number(chunk["ageEnd"]),
                };
                results.push(o);
            }
        });
    });
    return results;
};
exports.getData = getData;
const getAgeRange = (data) => {
    let results = [];
    data.forEach((d) => {
        const res = d.map((el) => {
            const age = el.age.split(" ")[0].split("–");
            console.log("AGE => ", age);
            return Object.assign(Object.assign({}, el), { ageStart: parseInt(age[0]), ageEnd: parseInt(age[1]) });
        });
        results.push(res);
    });
    return results;
};
exports.getAgeRange = getAgeRange;
//# sourceMappingURL=manage.js.map