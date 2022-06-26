"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVerifyAccountMail = void 0;
const DOMAIN = "http://localhost:3000";
const getVerifyAccountMail = (name, token) => {
    return `
    
  <!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <title>Verify your Vanille Fraise Email</title>
    <meta name="author" content="SitePoint" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Nuosu+SIL&family=Roboto:wght@100;300;400;500&display=swap"
      rel="stylesheet"
    />

    <link rel="icon" href="/favicon.ico" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

    <link rel="stylesheet" href="css/styles.css?v=1.0" />

    <!--
      font-family: 'Nuosu SIL', serif;
      font-family: 'Roboto', sans-serif;
    -->
    <style>
      * {
        padding: 0;
        margin: 0;
        font-family: "Roboto", sans-serif;
        color: #565656;
      }
      body {
        height: 400px;
        width: 600px;
        /*
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);*/
      }
      .logo {
        font-family: "Nuosu SIL", serif;
        text-align: center;
        font-size: 24px;
      }
      .title {
        margin-top: 20px;
        margin-bottom: 10px;
        font-size: 20px;
        text-align: center;
        font-weight: bold;
      }
      .subtitle {
        font-size: 13px;
        font-weight: 500;
        text-align: center;
        opacity: 0.8;
      }
      .btn {
        display: block;
        background: #ffe5e9;
        border-radius: 7px;
        width: 160px;
        text-decoration: none;
        color: #434343;
        font-weight: bold;
        padding: 10px 20px;
        margin: auto;
        margin-top: 30px;
        text-align: center;
      }
      .line {
        width: 50%;
        margin: auto;
        margin-top: 20px;
        opacity: 0.6;
        border-style: dashed;
        border-width: 1px;
        display: none;
      }
    </style>
  </head>

  <body>
    <div class="container">
      <h1 class="logo">Vanille Fraise</h1>
      <hr class="line" />
      <h1 class="title">Verify Your Account</h1>
      <h2 class="subtitle">
        Hello ${name}<br />
        Welcome to Vanille Fraise, to start using your account and tracking your nutrition, please verify your email address.
      </h2>
      <a class="btn" href="${DOMAIN}/rp/${token}">Verify Now</a>
    </div>
    <!-- your content here... -->
    <script src="js/scripts.js"></script>
  </body>
</html>

  `;
};
exports.getVerifyAccountMail = getVerifyAccountMail;
//# sourceMappingURL=verifyAccountMail.js.map