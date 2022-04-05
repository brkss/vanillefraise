"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRefreshToken = exports.generateAccessToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const generateAccessToken = (user) => {
    if (!user) {
        return "";
    }
    const payload = {
        userID: user.id,
    };
    const _token = (0, jsonwebtoken_1.sign)(payload, process.env.ACCESS_SECRET, {
        expiresIn: "15m",
    });
    return _token;
};
exports.generateAccessToken = generateAccessToken;
const generateRefreshToken = (user) => {
    if (!user)
        return "";
    const _token = (0, jsonwebtoken_1.sign)({
        userID: user.id,
        version: user.version,
    }, process.env.REFRESH_SECRET, {
        expiresIn: "7d",
    });
    return _token;
};
exports.generateRefreshToken = generateRefreshToken;
//# sourceMappingURL=generate.js.map