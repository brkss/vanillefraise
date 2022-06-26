import { sign } from "jsonwebtoken";
import { User } from "../../entity/User";

export const generateAccountVerificationToken = (user: User) => {
  const token = sign(
    { userId: user.id },
    process.env.ACCOUNT_VERIFICATION_SECRET!
  );
  return token;
};
