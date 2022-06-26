"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAccountVerificationToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const generateAccountVerificationToken = (user) => {
    const token = (0, jsonwebtoken_1.sign)({ userId: user.id }, process.env.ACCOUNT_VERIFICATION_SECRET);
    return token;
};
exports.generateAccountVerificationToken = generateAccountVerificationToken;
//# sourceMappingURL=accountVerificationToken.js.map