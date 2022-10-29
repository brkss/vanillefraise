"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mg_verify_account = void 0;
const mailgun_js_1 = __importDefault(require("mailgun.js"));
const form_data_1 = __importDefault(require("form-data"));
const mailgun = new mailgun_js_1.default(form_data_1.default);
const mg = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY,
    url: "https://api.eu.mailgun.net",
});
const mg_verify_account = async (user) => {
    if (!user)
        return false;
    const response = await mg.messages
        .create(process.env.MAILGUN_DOMAIN, {
        from: "Vanille Fraise <email@vanillefraise.me>",
        to: [user.email],
        subject: "Verify Your Account",
        text: "testing account verification ! ",
    })
        .catch((e) => {
        console.log("something went wronf sending verification email !", e);
        return false;
    });
    console.log("MG : email verification request response :", response);
    return true;
};
exports.mg_verify_account = mg_verify_account;
//# sourceMappingURL=index.js.map