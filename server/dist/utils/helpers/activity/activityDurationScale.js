"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activityDurationScale = void 0;
const activityDurationScale = (duration) => {
    const d = {
        minutes: 0,
        hours: 0,
    };
    const parsed_duration = duration.split(":");
    d.hours = parseInt(parsed_duration[0]);
    d.minutes = parseInt(parsed_duration[1]);
    return d.hours + d.minutes / 60;
};
exports.activityDurationScale = activityDurationScale;
//# sourceMappingURL=activityDurationScale.js.map