"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateActivityBurnedCalories = void 0;
const durationScale = (duration) => {
    const parsed = duration.split(":");
    const d = {
        hours: parseInt(parsed[0]),
        minutes: parseInt(parsed[1])
    };
    return d.hours * 60 + d.minutes;
};
const calculateActivityBurnedCalories = (category, duration, weight) => {
    const scale = durationScale(duration);
    const met = category.lowmet;
    const bc = (met * weight * 3.5) / 200;
    return bc * scale;
};
exports.calculateActivityBurnedCalories = calculateActivityBurnedCalories;
//# sourceMappingURL=calculateBurnedCalories.js.map