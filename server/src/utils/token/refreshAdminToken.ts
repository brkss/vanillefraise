import { Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { Admin } from "../../entity/admin";
import {
  generateAdminAccessToken,
  generateAdminRefreshToken,
  sendAdminRefreshToken,
} from "../token/adminToken";

export const refreshAdminToken = async (req: Request, res: Response) => {
  const token = req.cookies.auid;
  if (!token) {
    return res.send({
      status: false,
      token: "",
    });
  }

  let payload: any;
  try {
    payload = verify(token, process.env.ADMIN_REFRESH_SECRET!);
  } catch (e) {
    console.log("Something went wrong refreshing token : ", e);
    return res.send({
      status: false,
      token: "",
    });
  }

  if (!payload)
    return res.send({
      status: false,
      token: "Token invalid ",
    });

  const admin = await Admin.findOne({ where: { id: payload.adminID! } });
  if (!admin) {
    console.log("Admin not found !");
    return res.send({
      status: false,
      token: "",
    });
  }

  const _token = generateAdminAccessToken(admin);
  sendAdminRefreshToken(res, generateAdminRefreshToken(admin));

  return res.send({
    status: true,
    token: _token,
  });
};
