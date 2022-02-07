import { Resolver, Query, Mutation, Arg, Ctx } from "type-graphql";
import { AuthDefaultResponse } from "../../utils/responses";
import { User } from "../../entity/User";
import {
  createResetPasswordToken,
  verifyPasswordToken,
} from "../../utils/token";
import { ResetPasswordInput } from "../../utils/inputs/auth/resetpassword.input";
import {
  generateAccessToken,
  generateRefreshToken,
  sendRefreshToken,
} from "../../utils/token";
import { IContext } from "../../utils/types/Context";
import { hash } from "bcrypt";
import { ResetPassword } from "../../entity/ResetPassword";

@Resolver()
export class SecurityResolver {
  @Query(() => String)
  work() {
    return "yes !";
  }

  @Mutation(() => Boolean)
  async verifyResetToken(@Arg("token") token: string) {
    if (!token) {
      return false;
    }
    const vrf = await verifyPasswordToken(token);
    if (!vrf.status) return false;
    return true;
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
      // you must not send token as response the token should be sent in email !
      // this is only for test reasons
      return {
        status: true,
        message: "Token created successfuly",
        token: _token,
      };
    } catch (e) {
      console.log("Something went wrong ! => ", e);
      return {
        status: false,
        message: "Something went wrong !",
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
          message: "Invalid token !",
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
