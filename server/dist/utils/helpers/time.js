"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseTime = void 0;
const parseTime = (time) => {
    const result = {
        hours: 0,
        minutes: 0,
        seconds: 0
    };
    const parsed = time.split(':');
    result.hours = parseInt(parsed[0]);
    result.minutes = parseInt(parsed[1]);
    result.seconds = parseInt(parsed[2]);
    return result;
};
exports.parseTime = parseTime;
//# sourceMappingURL=time.js.map