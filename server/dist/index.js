"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const build_1 = require("./utils/build");
const typeorm_1 = require("typeorm");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const token_1 = require("./utils/token");
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const seed_1 = require("./utils/seed");
(async () => {
    await (0, typeorm_1.createConnection)({
        type: "mysql",
        host: process.env.DB_HOST || "127.0.0.1",
        port: 3306,
        username: process.env.DB_USER || "root",
        password: process.env.DB_PASS || "root",
        database: process.env.DB_NAME || "vanillefraise_test_tmp",
        charset: "utf8mb4_unicode_ci",
        synchronize: true,
        logging: false,
        entities: ["dist/entity/**/*.js"],
        migrations: ["dist/migration/**/*.js"],
        subscribers: ["dist/subscriber/**/*.js"],
    });
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)({
        origin: [
            "http://localhost:3001",
            "http://localhost:3000",
            "https://api.opencc.tech",
        ],
        credentials: true,
    }));
    app.use((0, cookie_parser_1.default)());
    app.get("/", (_, res) => {
        res.redirect("https://vanillefraise.me");
    });
    app.post("/refresh_token", async (req, res) => await (0, token_1.refreshToken)(res, req));
    app.post("/refresh_admin_token", async (req, res) => await (0, token_1.refreshAdminToken)(req, res));
    app.get("/seed", async (_, res) => {
        await (0, seed_1.seed)();
        res.send({ status: true });
    });
    const dir = path_1.default.join(__dirname, "cdn/images");
    app.use("/images", express_1.default.static(dir));
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: await (0, build_1.build)(),
        context: ({ req, res }) => ({ req, res }),
    });
    apolloServer.applyMiddleware({ app, cors: false });
    app.listen(process.env.PORT, () => {
        console.log(`🚀 server runing http://localhost:${process.env.PORT}`);
    });
})();
//# sourceMappingURL=index.js.map