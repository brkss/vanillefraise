import Mailgun from "mailgun.js";
import FormData from "form-data";
import { User } from "../../../entity/User";
import { getVerifyAccountMail, getResetPasswordMail  } from "../../data";

const mailgun = new Mailgun(FormData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY!,
  url: "https://api.eu.mailgun.net",
});

export const mg_verify_account = async (
  user: User,
  token: string
): Promise<boolean> => {
  if (!user) return false;
  const response = await mg.messages
    .create(process.env.MAILGUN_DOMAIN!, {
      from: "Vanille Fraise <email@vanillefraise.me>",
      to: [user.email],
      subject: "Verify Your Account",
      //text: "testing account verification ! ",
      html: getVerifyAccountMail(user.name, token),
    })
    .catch((e) => {
      console.log("something went wronf sending verification email !", e);
      return false;
    });
  console.log("MG : email verification request response :", response);
  return true;
};

export const mg_reset_password_email = async (
  user: User,
  token: string
): Promise<boolean> => {
  if (!user || !token) return false;
  const response = await mg.messages
    .create(process.env.MAILGUN_DOMAIN!, {
      from: "Vanille Fraise <email@vanillefraise.me>",
      to: [user.email],
      subject: "Reset Your Password",
      html: getResetPasswordMail(user.name, token),
    })
    .catch((e) => {
      console.log("error accured while seding reset password email : ", e);
      return false;
    });
    console.log("reset password email response : ", response);  
  return true;
};
