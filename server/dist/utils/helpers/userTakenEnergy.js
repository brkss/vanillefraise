"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserTakenEnergy = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
const UserInfo_1 = require("../../entity/UserInfo");
const typeorm_1 = require("typeorm");
const getUserTakenEnergy = async (user) => {
    if (!user)
        return 0;
    const cookedRecipes = await UserInfo_1.CookedRecipe.find({
        where: {
            user: user,
            created_at: (0, typeorm_1.Like)(`%${(0, dayjs_1.default)().format("YYYY-MM-DD")}%`),
        },
        relations: ["recipe", "recipe.totalnutrition"],
    });
    if (cookedRecipes.length === 0)
        return 0;
    let energy = 0;
    for (let cooked of cookedRecipes) {
        for (let nutrition of cooked.recipe.totalnutrition) {
            if (nutrition.code === "ENERC_KCAL") {
                energy += nutrition.quantity;
            }
        }
    }
    return energy;
};
exports.getUserTakenEnergy = getUserTakenEnergy;
//# sourceMappingURL=userTakenEnergy.js.map