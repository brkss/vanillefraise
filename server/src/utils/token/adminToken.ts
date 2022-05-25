import { sign } from "jsonwebtoken";
import { Admin } from "../../entity/admin";
import { Response } from "express";

export const generateAdminAccessToken = (admin: Admin): string => {
  if (!admin) {
    return "";
  }
  const payload = {
    adminID: admin.id,
  };
  const _token = sign(payload, process.env.ADMIN_ACCESS_SECRET!, {
    expiresIn: "15m",
  });

  return _token;
};

export const generateAdminRefreshToken = (admin: Admin): string => {
  if (!admin) return "";

  const payload = {
    adminID: admin.id,
  };
  const _token = sign(payload, process.env.ADMIN_REFRESH_SECRET!, {
    expiresIn: "7d",
  });

  return _token;
};

export const sendAdminRefreshToken = (res: Response, token: string) => {
  if (!res || !token) return;

  res.cookie("auid", token, {
    httpOnly: true,
  });
};
