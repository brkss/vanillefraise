import "dotenv/config";
import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { build } from "./utils/build";
import { createConnection } from "typeorm";
import cookieParser from "cookie-parser";
import { refreshToken, refreshAdminToken } from "./utils/token";
import cors from "cors";
import path from "path";
//import { optimize } from './utils/helpers';
import { seed } from "./utils/seed";

(async () => {
  await createConnection({
    type: "mysql",
    host: process.env.DB_HOST || "127.0.0.1",
    port: 3306,
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "root",
    database: process.env.DB_NAME || "vanillefraise",
    //database: process.env.DB_NAME || "opencc",
    charset: "utf8mb4_unicode_ci",
    synchronize: true,
    logging: false,
    entities: ["dist/entity/**/*.js"],
    migrations: ["dist/migration/**/*.js"],
    subscribers: ["dist/subscriber/**/*.js"],
  });
  const app = express();
  app.use(
    cors({
      origin: [
        "http://localhost:3001",
        "http://localhost:3000",
        "https://api.opencc.tech",
      ],
      credentials: true,
    })
  );

  app.use(cookieParser());

  app.get("/", (_, res) => {
    res.redirect("https://opencc.tech");
    //res.send("hello from express !");
  });

  app.post("/refresh_token", async (req, res) => await refreshToken(res, req));
  app.post(
    "/refresh_admin_token",
    async (req, res) => await refreshAdminToken(req, res)
  );
  // seed
  app.get("/seed", async (_, res) => {
    await seed();
    res.send({ status: true });
  });
  // cdn
  const dir = path.join(__dirname, "cdn/images");
  app.use("/images", express.static(dir));

  const apolloServer = new ApolloServer({
    schema: await build(),
    context: ({ req, res }) => ({ req, res }),
    //playground: false
  });

  apolloServer.applyMiddleware({ app, cors: false });

  app.listen(process.env.PORT!, () => {
    console.log(`🚀 server runing http://localhost:${process.env.PORT}`);
  });
})();
