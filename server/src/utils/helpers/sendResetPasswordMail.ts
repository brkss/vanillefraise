import nodemailer from 'nodemailer';


export const sendMail = () => {
  
  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      accessToken: "",
      user: "berkassebrahim@gmail.com",

    }
  })
}
