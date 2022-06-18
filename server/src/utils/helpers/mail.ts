import nodemailer from "nodemailer";
import { getMail } from '../data/resetPasswordMail';

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

export const sendMail = async (to: string, name: string, token: string) => {
  const result = await transporter.sendMail({
    from: process.env.EMAIL,
    to: to,
    subject: "VANILLE FRAISE : RESET PASSWORD ",
    text: "Reset Vanille Fraise Password !",
    html: getMail(name, token)
  });

  console.log(JSON.stringify(result, null, 4));
};
