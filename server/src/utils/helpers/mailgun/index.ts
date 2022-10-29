import Mailgun from "mailgun.js";
import FormData from "form-data";
import { User } from "../../../entity/User";

const mailgun = new Mailgun(FormData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY!,
  url: "https://api.eu.mailgun.net",
});

export const mg_verify_account = async (user: User): Promise<boolean> => {
  if (!user) return false;
  const response = await mg.messages
    .create(process.env.MAILGUN_DOMAIN!, {
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
