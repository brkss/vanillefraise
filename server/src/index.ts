import "dotenv/config";
import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import {
  UserResolver,
  SecurityResolver,
  CreateRecipeResolver,
} from "./resolvers";
import { createConnection } from "typeorm";
import cookieParser from "cookie-parser";
import { refreshToken } from "./utils/token";
import cors from "cors";

(async () => {
  await createConnection();
  const app = express();
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

  app.use(cookieParser());

  app.get("/", (_, res) => {
    res.send("hello from express !");
  });

  app.post("/refresh_token", async (req, res) => await refreshToken(res, req));

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver, SecurityResolver, CreateRecipeResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({ req, res }),
  });

  apolloServer.applyMiddleware({ app, cors: false });

  app.listen(process.env.PORT!, () => {
    console.log(`🚀 server runing http://localhost:${process.env.PORT}`);
  });
})();
