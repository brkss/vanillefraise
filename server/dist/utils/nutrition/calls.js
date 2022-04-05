"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.recipeNutrition = void 0;
const axios_1 = __importDefault(require("axios"));
const URL = `https://api.edamam.com/api/nutrition-details?app_id=${process.env.EDAM_APP_ID}&app_key=${process.env.EDAM_CLIENT_SECRET}`;
const recipeNutrition = async (data) => {
    const res = await axios_1.default.post(URL, {
        title: data.name,
        ingr: data.ingr,
    });
    console.log("Res => ", res.data);
    return res;
};
exports.recipeNutrition = recipeNutrition;
//# sourceMappingURL=calls.js.map