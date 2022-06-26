import { sign, verify } from "jsonwebtoken";
import { User } from "../../entity/User";

export const generateAccountVerificationToken = (user: User) => {
  const token = sign(
    { userId: user.id },
    process.env.ACCOUNT_VERIFICATION_SECRET!
  );
  return token;
};

export const verifyAccountVerificationToken = (token: string): string => {
  if (!token) return "";

  let userId: string = "";

  try {
    const payload: any = verify(
      token,
      process.env.ACCOUNT_VERIFICATION_SECRET!
    );
    userId = payload.userId;
  } catch (e) {
    console.log("Error Accured While Verifiying Account Token ! ");
    return "";
  }

  return userId;
};
