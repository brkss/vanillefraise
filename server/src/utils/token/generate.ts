import { sign } from "jsonwebtoken";
import { User } from "../../entity/User";

export const generateAccessToken = (user: User) => {
  if (!user) {
    return "";
  }

  const payload = {
    userID: user.id,
  };
  const _token = sign(payload, process.env.ACCESS_SECRET!, {
    expiresIn: "15m",
  });

  return _token;
};

export const generateRefreshToken = (user: User) => {
  if (!user) return "";

  const _token = sign(
    {
      userID: user.id,
      version: user.version,
    },
    process.env.REFRESH_SECRET!,
    {
      expiresIn: "7d",
    }
  );

  return _token;
};
