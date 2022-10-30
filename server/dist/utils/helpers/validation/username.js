"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUsername = exports.formatUsername = void 0;
const formatUsername = (username) => {
    return username.toUpperCase().trim();
};
exports.formatUsername = formatUsername;
const validateUsername = (username) => {
    const res = /^[a-z0-9_\.]+$/.exec(username);
    const valid = !!res && !/(\.\.)/.exec(username);
    return valid;
};
exports.validateUsername = validateUsername;
//# sourceMappingURL=username.js.map