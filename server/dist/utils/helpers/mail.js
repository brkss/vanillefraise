"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const resetPasswordMail_1 = require("../data/resetPasswordMail");
const transporter = nodemailer_1.default.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
    },
});
const sendMail = async (to, name, token) => {
    const result = await transporter.sendMail({
        from: process.env.EMAIL,
        to: to,
        subject: "VANILLE FRAISE : RESET PASSWORD ",
        text: "Reset Vanille Fraise Password !",
        html: (0, resetPasswordMail_1.getMail)(name, token)
    });
    console.log(JSON.stringify(result, null, 4));
};
exports.sendMail = sendMail;
//# sourceMappingURL=mail.js.map