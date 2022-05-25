import { MiddlewareFn } from "type-graphql";
import { IContext } from "../types/Context";
import { verify } from "jsonwebtoken";

export const isAdminAuth: MiddlewareFn<IContext> = ({ context }, next) => {
  const authorization = context.req.headers["authorization"];
  if (!authorization) {
    throw new Error("Not authenticated !");
  }
  const token = authorization.split(" ")[1];
  if (!token) {
    throw new Error("Invalid Token !");
  }
  try {
    const payload = verify(token, process.env.ADMIN_ACCESS_SECRET!);
    context.payload = payload;
  } catch (e) {
    console.log("Someyhing went wrong ! : ", e);
    throw new Error("Invalid Token !");
  }
  return next();
};
