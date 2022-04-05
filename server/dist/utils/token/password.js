"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyPasswordToken = exports.createResetPasswordToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const User_1 = require("../../entity/User");
const ResetPassword_1 = require("../../entity/ResetPassword");
const createResetPasswordToken = (user, record) => {
    const _token = (0, jsonwebtoken_1.sign)({
        userID: user.id,
        record: record.id,
    }, process.env.PASSWORD_SECRET, {
        expiresIn: "30m",
    });
    return _token;
};
exports.createResetPasswordToken = createResetPasswordToken;
const verifyPasswordToken = async (_token) => {
    let payload;
    try {
        payload = (0, jsonwebtoken_1.verify)(_token, process.env.PASSWORD_SECRET);
    }
    catch (e) {
        console.log("verifying password token => ", e);
        return {
            status: false,
        };
    }
    if (!payload || !payload.userID) {
        return {
            status: false,
        };
    }
    console.log("password token payload => ", payload);
    const record = await ResetPassword_1.ResetPassword.findOne({ where: { id: payload.record } });
    if (!record || record.expired) {
        return {
            status: false,
        };
    }
    return {
        status: true,
        user: await User_1.User.findOne({ where: { id: payload.userID } }),
        record: record,
    };
};
exports.verifyPasswordToken = verifyPasswordToken;
//# sourceMappingURL=password.js.map