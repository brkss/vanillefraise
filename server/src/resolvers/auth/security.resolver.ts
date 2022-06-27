import {
  Resolver,
  Query,
  Mutation,
  Arg,
  Ctx,
  UseMiddleware,
} from "type-graphql";
import {
  AuthDefaultResponse,
  DefaultResponse,
  VerifyResetPasswordTokenResponse,
} from "../../utils/responses";
import {
  createResetPasswordToken,
  generateAccountVerificationToken,
  verifyPasswordToken,
} from "../../utils/token";
import {
  generateAccessToken,
  generateRefreshToken,
  sendRefreshToken,
  verifyAccountVerificationToken,
} from "../../utils/token";
import { User } from "../../entity/User";
import { ResetPasswordInput } from "../../utils/inputs/auth/resetpassword.input";
import { IContext } from "../../utils/types/Context";
import { hash } from "bcrypt";
import { ResetPassword } from "../../entity/ResetPassword";
import {
  sendResetPasswordMail,
  sendVerifyAccountMail,
} from "../../utils/helpers/mail";
import { isUserAuth } from "../../utils/middlewares";

@Resolver()
export class SecurityResolver {
  @Query(() => String)
  work() {
    return "yes !";
  }

  @UseMiddleware(isUserAuth)
  @Query(() => Boolean)
  async isAccountVerified(@Ctx() ctx: IContext): Promise<boolean> {
    const user = await User.findOne({ where: { id: ctx.payload.userID } });
    if (!user) return false;
    return user.verified;
  }

  @UseMiddleware(isUserAuth)
  @Mutation(() => DefaultResponse)
  async resendAccountVerification(
    @Ctx() ctx: IContext
  ): Promise<DefaultResponse> {
    const user = await User.findOne({ where: { id: ctx.payload.userID } });
    if (!user) {
      return {
        status: false,
        message: "Invalid User",
      };
    }
    if (user.verified) {
      return {
        status: true,
        message: "Your Account Is Already Verified !",
      };
    }
    const _token = generateAccountVerificationToken(user);
    sendVerifyAccountMail(user.email, user.name, _token);
    return {
      status: true,
      message: `Verification Link sent successfuly to ${user.email}`,
    };
  }

  @Mutation(() => DefaultResponse)
  async verifyAccount(@Arg("token") token: string): Promise<DefaultResponse> {
    if (!token) {
      return {
        status: false,
        message: "Invalid Token",
      };
    }

    const userId = verifyAccountVerificationToken(token);
    if (!userId) {
      return {
        status: false,
        message: "Invalid Token :<",
      };
    }

    const user = await User.findOne({ where: { id: userId } });
    if (!user) {
      return {
        status: false,
        message: "Invalid User !",
      };
    }
    if (user.verified) {
      return {
        status: true,
        message: "Your Account is Already Verified !",
      };
    }
    user.verified = true;
    await user.save();

    return {
      status: true,
      message:
        "Your account is now active. Thank you for using Vanille Fraise !",
    };
  }

  @Query(() => VerifyResetPasswordTokenResponse)
  async verifyResetToken(
    @Arg("token") token: string
  ): Promise<VerifyResetPasswordTokenResponse> {
    if (!token) {
      return {
        status: false,
        message: "TOKEN not found",
      };
    }
    const vrf = await verifyPasswordToken(token);
    if (!vrf.status)
      return {
        status: false,
        message: "invalid token",
      };

    return {
      status: true,
      user: vrf.user,
    };
  }

  @Mutation(() => AuthDefaultResponse)
  async requestResetPassword(
    @Arg("email") email: string
  ): Promise<AuthDefaultResponse> {
    if (!email) {
      return {
        status: false,
        message: "Invalid Data !",
      };
    }
    try {
      const user = await User.findOne({ where: { email: email } });
      if (!user) {
        return {
          status: false,
          message: "Invalid Email !",
        };
      }
      const resetRecord = new ResetPassword();
      resetRecord.user = user;
      await resetRecord.save();
      const _token = createResetPasswordToken(user, resetRecord);
      await sendResetPasswordMail(user.email, user.name, _token);
      // you must not send token as response the token should be sent in email !
      // this is only for test reasons
      return {
        status: true,
        message: "Token created successfuly",
      };
    } catch (e) {
      console.log("Something went wrong ! => ", e);
      return {
        status: false,
        message: `Something went wrong ! ${e}`,
      };
    }
  }

  @Mutation(() => AuthDefaultResponse)
  async resetPassword(
    @Arg("data") data: ResetPasswordInput,
    @Ctx() ctx: IContext
  ): Promise<AuthDefaultResponse> {
    if (!data.newPassword || !data.token) {
      return {
        status: false,
        message: "Invalid Data !",
      };
    }

    try {
      const vrf = await verifyPasswordToken(data.token);

      if (!vrf.status) {
        return {
          status: false,
          message: "Invalid Token",
        };
      }
      const user = vrf.user;
      const record = vrf.record;
      if (!user || !record) {
        return {
          status: false,
          message: "User not found !",
        };
      }
      // RESPECT ! i thaught i forgot it lol
      user.version = user.version + 1;
      user.password = await hash(data.newPassword, 5);
      await user.save();

      record.expired = true;
      await record.save();

      sendRefreshToken(ctx.res, generateRefreshToken(user));
      return {
        status: true,
        token: generateAccessToken(user),
      };
    } catch (e) {
      console.log(
        "Something went wrong trying to reset this user password !",
        e
      );
      return {
        status: false,
        message: "Something went wrong !",
      };
    }
  }
}
