"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_recipe = void 0;
const axios_1 = __importDefault(require("axios"));
const get_recipe = async (url) => {
    if (!url)
        return null;
    const res = await (0, axios_1.default)({
        method: "POST",
        url: `${process.env.RECIPE_API_URL}/get-recipe`,
        data: {
            url: url,
        },
    });
    console.log("get recipe results : ", res);
    return {
        title: "SUCCESS",
    };
};
exports.get_recipe = get_recipe;
//# sourceMappingURL=index.js.map