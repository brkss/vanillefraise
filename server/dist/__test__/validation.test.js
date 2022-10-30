"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_1 = require("../utils/helpers/validation");
test("Test email validation", () => {
    expect((0, validation_1.validateEmail)("dumyemail@gmail.com")).toBeTruthy();
});
test("Test email validation", () => {
    expect((0, validation_1.validateEmail)("dumyemail.com")).toBeFalsy();
});
test("Test email validation", () => {
    expect((0, validation_1.validateEmail)("dumyemail#3@gmail.com")).toBeTruthy();
});
test("Test username validation", () => {
    expect((0, validation_1.validateUsername)(".....com")).toBeFalsy();
});
test("Test username  validation", () => {
    expect((0, validation_1.validateUsername)("simpleusername")).toBeTruthy();
});
test("Test username  validation", () => {
    expect((0, validation_1.validateUsername)("simple.username")).toBeTruthy();
});
test("Test username validation", () => {
    expect((0, validation_1.validateUsername)("haloooo$$$$")).toBeFalsy();
});
//# sourceMappingURL=validation.test.js.map