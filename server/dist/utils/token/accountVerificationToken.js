"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAccountVerificationToken = exports.generateAccountVerificationToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const generateAccountVerificationToken = (user) => {
    const token = (0, jsonwebtoken_1.sign)({ userId: user.id }, process.env.ACCOUNT_VERIFICATION_SECRET);
    return token;
};
exports.generateAccountVerificationToken = generateAccountVerificationToken;
const verifyAccountVerificationToken = (token) => {
    if (!token)
        return "";
    let userId = "";
    try {
        const payload = (0, jsonwebtoken_1.verify)(token, process.env.ACCOUNT_VERIFICATION_SECRET);
        userId = payload.userId;
    }
    catch (e) {
        console.log("Error Accured While Verifiying Account Token ! ");
        return "";
    }
    return userId;
};
exports.verifyAccountVerificationToken = verifyAccountVerificationToken;
//# sourceMappingURL=accountVerificationToken.js.map