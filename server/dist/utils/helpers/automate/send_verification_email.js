"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.send_verification_emails = void 0;
const User_1 = require("../../../entity/User");
const mailgun_1 = require("../mailgun");
const accountVerificationToken_1 = require("../../token/accountVerificationToken");
const send_verification_emails = async () => {
    const users = await User_1.User.find({ where: { verified: false } });
    if (users.length === 0)
        return false;
    for (let user of users) {
        const _token = (0, accountVerificationToken_1.generateAccountVerificationToken)(user);
        await (0, mailgun_1.mg_verify_account)(user, _token);
    }
    return true;
};
exports.send_verification_emails = send_verification_emails;
//# sourceMappingURL=send_verification_email.js.map