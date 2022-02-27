import { Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { User } from "../../entity/User";
import { sendRefreshToken, generateAccessToken, generateRefreshToken } from ".";

export const refreshToken = async (res: Response, req: Request) => {
  const _token = req.cookies.uid || req.headers["r-token"];

  if (!_token) {
    return res.send({
      status: false,
      token: "",
    });
  }

  let payload: any;
  try {
    payload = verify(_token, process.env.REFRESH_SECRET!);
  } catch (e) {
    console.log("something went wrong trying to parse token => ", e);
    return res.send({
      status: false,
      token: "",
    });
  }
  // find user
  const user = await User.findOne({ where: { id: payload.userID } });
  if (!user) {
    return res.send({
      status: false,
      token: "",
    });
  }

  // check token version
  if (user.version != payload.version) {
    return res.send({
      status: false,
      token: "",
    });
  }

  // send new token !

  sendRefreshToken(res, generateRefreshToken(user));
  return res.send({
    status: true,
    token: generateAccessToken(user),
  });
};
