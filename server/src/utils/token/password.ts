import { sign, verify } from "jsonwebtoken";
import { User } from "../../entity/User";
import { ResetPassword } from "../../entity/ResetPassword";

export const createResetPasswordToken = (
  user: User,
  record: ResetPassword
): string => {
  const _token = sign(
    {
      userID: user.id,
      record: record.id,
    },
    process.env.PASSWORD_SECRET!,
    {
      expiresIn: "30m",
    }
  );

  return _token;
};

interface IVerifyPasswordTokenResponse {
  status: boolean;
  user?: User;
  record?: ResetPassword;
}

export const verifyPasswordToken = async (
  _token: string
): Promise<IVerifyPasswordTokenResponse> => {
  let payload;

  try {
    payload = verify(_token, process.env.PASSWORD_SECRET!) as any;
  } catch (e) {
    console.log("verifying password token => ", e);
    return {
      status: false,
    };
  }

  if (!payload || !payload.userID) {
    return {
      status: false,
    };
  }

  console.log("password token payload => ", payload);
  const record = await ResetPassword.findOne({ where: { id: payload.record } });
  if (!record || record.expired) {
    return {
      status: false,
    };
  }
  return {
    status: true,
    user: await User.findOne({ where: { id: payload.userID } }),
    record: record,
  };
};
