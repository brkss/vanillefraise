import * as EmailValidator from "email-validator";

export const validateEmail = (email: string): boolean => {
  return EmailValidator.validate(email);
};
