import { MiddlewareFn } from "type-graphql";
import { IContext } from "../types/Context";
import { verify } from "jsonwebtoken";

export const isUserAuth: MiddlewareFn<IContext> = ({ context }, next) => {
  const authorisation = context.req.headers["authorization"];
  if (!authorisation) {
    throw new Error("Not authenticated !");
  }

  const token = authorisation.split(" ")[1];
  if (!token) {
    throw new Error("Token not found !");
  }

  try {
    const payload = verify(token, process.env.ACCESS_SECRET!);
    context.payload = payload;
  } catch (e) {
    console.log("something went wrong parsing token => ", e);
    throw new Error("Invalid Token !");
  }

  return next();
};
