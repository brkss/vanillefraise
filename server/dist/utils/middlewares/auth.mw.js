"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUserAuth = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const isUserAuth = ({ context }, next) => {
    const authorisation = context.req.headers["authorization"];
    if (!authorisation) {
        throw new Error("Not authenticated !");
    }
    const token = authorisation.split(" ")[1];
    if (!token) {
        throw new Error("Token not found !");
    }
    try {
        const payload = (0, jsonwebtoken_1.verify)(token, process.env.ACCESS_SECRET);
        context.payload = payload;
    }
    catch (e) {
        console.log("something went wrong parsing token => ", e);
        throw new Error("Invalid Token !");
    }
    return next();
};
exports.isUserAuth = isUserAuth;
//# sourceMappingURL=auth.mw.js.map