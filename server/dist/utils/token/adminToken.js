"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendAdminRefreshToken = exports.generateAdminRefreshToken = exports.generateAdminAccessToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const generateAdminAccessToken = (admin) => {
    if (!admin) {
        return "";
    }
    const payload = {
        adminID: admin.id,
    };
    const _token = (0, jsonwebtoken_1.sign)(payload, process.env.ADMIN_ACCESS_SECRET, {
        expiresIn: "15m",
    });
    return _token;
};
exports.generateAdminAccessToken = generateAdminAccessToken;
const generateAdminRefreshToken = (admin) => {
    if (!admin)
        return "";
    const payload = {
        adminID: admin.id,
    };
    const _token = (0, jsonwebtoken_1.sign)(payload, process.env.ADMIN_REFRESH_SECRET, {
        expiresIn: "7d",
    });
    return _token;
};
exports.generateAdminRefreshToken = generateAdminRefreshToken;
const sendAdminRefreshToken = (res, token) => {
    if (!res || !token)
        return;
    res.cookie("auid", token, {
        httpOnly: true,
    });
};
exports.sendAdminRefreshToken = sendAdminRefreshToken;
//# sourceMappingURL=adminToken.js.map