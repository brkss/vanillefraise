"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const User_1 = require("../../entity/User");
const _1 = require(".");
const refreshToken = async (res, req) => {
    const _token = req.cookies.uid || req.headers["r-token"];
    if (!_token) {
        return res.send({
            status: false,
            token: "",
        });
    }
    let payload;
    try {
        payload = (0, jsonwebtoken_1.verify)(_token, process.env.REFRESH_SECRET);
    }
    catch (e) {
        console.log("something went wrong trying to parse token => ", e);
        return res.send({
            status: false,
            token: "",
        });
    }
    const user = await User_1.User.findOne({ where: { id: payload.userID } });
    if (!user) {
        return res.send({
            status: false,
            token: "",
        });
    }
    if (user.version != payload.version) {
        return res.send({
            status: false,
            token: "",
        });
    }
    (0, _1.sendRefreshToken)(res, (0, _1.generateRefreshToken)(user));
    return res.send({
        status: true,
        token: (0, _1.generateAccessToken)(user),
    });
};
exports.refreshToken = refreshToken;
//# sourceMappingURL=refreshToken.js.map