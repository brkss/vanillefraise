"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshAdminToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const admin_1 = require("../../entity/admin");
const adminToken_1 = require("../token/adminToken");
const refreshAdminToken = async (req, res) => {
    const token = req.cookies.auid;
    if (!token) {
        return res.send({
            status: false,
            token: "",
        });
    }
    let payload;
    try {
        payload = (0, jsonwebtoken_1.verify)(token, process.env.ADMIN_REFRESH_SECRET);
    }
    catch (e) {
        console.log("Something went wrong refreshing token : ", e);
        return res.send({
            status: false,
            token: "",
        });
    }
    if (!payload)
        return res.send({
            status: false,
            token: "Token invalid ",
        });
    const admin = await admin_1.Admin.findOne({ where: { id: payload.adminID } });
    if (!admin) {
        console.log("Admin not found !");
        return res.send({
            status: false,
            token: "",
        });
    }
    const _token = (0, adminToken_1.generateAdminAccessToken)(admin);
    (0, adminToken_1.sendAdminRefreshToken)(res, (0, adminToken_1.generateAdminRefreshToken)(admin));
    return res.send({
        status: true,
        token: _token,
    });
};
exports.refreshAdminToken = refreshAdminToken;
//# sourceMappingURL=refreshAdminToken.js.map