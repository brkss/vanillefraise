"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdminAuth = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const isAdminAuth = ({ context }, next) => {
    const authorization = context.req.headers["authorization"];
    if (!authorization) {
        throw new Error("Not authenticated !");
    }
    const token = authorization.split(" ")[1];
    if (!token) {
        throw new Error("Invalid Token !");
    }
    try {
        const payload = (0, jsonwebtoken_1.verify)(token, process.env.ADMIN_ACCESS_SECRET);
        context.payload = payload;
    }
    catch (e) {
        console.log("Someyhing went wrong ! : ", e);
        throw new Error("Invalid Token !");
    }
    return next();
};
exports.isAdminAuth = isAdminAuth;
//# sourceMappingURL=admin.mw.js.map