"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeDates = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
const mergeDates = (data) => {
    const results = [];
    for (let item of data) {
        const date = (0, dayjs_1.default)(item.date).format("DD/MM/YYYY");
        const index = results.findIndex((x) => x.date === date);
        if (index === -1) {
            results.push({ intake: item.intake, date: date });
        }
        else {
            results[index].intake += item.intake;
        }
    }
    return results;
};
exports.mergeDates = mergeDates;
//# sourceMappingURL=mergeDates.js.map