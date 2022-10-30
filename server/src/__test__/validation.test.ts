import {
  validateUsername,
  validateEmail,
  //formatUsername,
} from "../utils/helpers/validation";

// test usermame / password / email validation
test("Test email validation", () => {
  expect(validateEmail("dumyemail@gmail.com")).toBeTruthy();
});

test("Test email validation", () => {
  expect(validateEmail("dumyemail.com")).toBeFalsy();
});

test("Test email validation", () => {
  expect(validateEmail("dumyemail#3@gmail.com")).toBeTruthy();
});

test("Test username validation", () => {
  expect(validateUsername(".....com")).toBeFalsy();
});

test("Test username  validation", () => {
  expect(validateUsername("simpleusername")).toBeTruthy();
});

test("Test username  validation", () => {
  expect(validateUsername("simple.username")).toBeTruthy();
});

test("Test username validation", () => {
  expect(validateUsername("haloooo$$$$")).toBeFalsy();
});
