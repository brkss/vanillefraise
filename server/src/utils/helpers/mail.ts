import nodemailer from "nodemailer";
import { getResetPasswordMail } from "../data/resetPasswordMail";
import { getVerifyAccountMail } from "../data/verifyAccountMail";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

export const sendVerifyAccountMail = async (
  to: string,
  name: string,
  token: string
) => {
  const result = await transporter.sendMail({
    from: process.env.EMAIL,
    to: to,
    subject: "Vanille Fraise: Verify Your Account",
    html: getVerifyAccountMail(name, token),
  });

  console.log(JSON.stringify(result, null, 4));
};

export const sendResetPasswordMail = async (
  to: string,
  name: string,
  token: string
) => {
  const result = await transporter.sendMail({
    from: process.env.EMAIL,
    to: to,
    subject: "VANILLE FRAISE : RESET PASSWORD ",
    text: "Reset Vanille Fraise Password !",
    html: getResetPasswordMail(name, token),
  });

  console.log(JSON.stringify(result, null, 4));
};
