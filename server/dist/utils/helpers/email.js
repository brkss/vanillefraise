"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEmail = void 0;
const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
};
exports.validateEmail = validateEmail;
//# sourceMappingURL=email.js.map