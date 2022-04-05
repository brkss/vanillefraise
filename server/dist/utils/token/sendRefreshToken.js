"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendRefreshToken = void 0;
const sendRefreshToken = (res, token) => {
    res.cookie("uid", token, {
        httpOnly: true,
    });
};
exports.sendRefreshToken = sendRefreshToken;
//# sourceMappingURL=sendRefreshToken.js.map