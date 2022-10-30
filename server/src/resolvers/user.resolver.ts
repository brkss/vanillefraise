import {
  Resolver,
  Query,
  Mutation,
  Arg,
  Ctx,
  UseMiddleware,
} from "type-graphql";
import { AuthDefaultResponse } from "../utils/responses";
import { RegisterInput, LoginInput } from "../utils/inputs";
import { User } from "../entity/User";
import { SpecialCondition } from "../entity/UserInfo";
import { hash, compare } from "bcrypt";
import {
  generateAccessToken,
  generateRefreshToken,
  sendRefreshToken,
  generateAccountVerificationToken,
} from "../utils/token";
import { IContext } from "../utils/types/Context";
import { isUserAuth } from "../utils/middlewares";
import { UserInfoValidtyInput } from "../utils/inputs/auth";
import { UserInfoValidityResponse } from "../utils/responses/auth";
import {
  formatUsername,
  validateEmail,
  validateUsername,
} from "../utils/helpers";
import { mg_verify_account } from "../utils/helpers";

@Resolver()
export class UserResolver {
  @Query(() => String)
  ping() {
    return "pong";
  }

  @Mutation(() => UserInfoValidityResponse)
  async checkInfoValidity(
    @Arg("data") data: UserInfoValidtyInput
  ): Promise<UserInfoValidityResponse> {
    if (
      !data ||
      !data.email ||
      !data.username ||
      !validateEmail(data.email) ||
      !validateUsername(data.username)
    ) {
      return {
        email: false,
        username: false,
      };
    }

    const response = {
      email: false,
      username: false,
    };

    const userEmail = await User.find({ where: { email: data.email } });
    const userUsername = await User.find({
      where: { username: formatUsername(data.username) },
    });
    if (userEmail.length == 0) response.email = true;
    if (userUsername.length == 0) response.username = true;

    //if(data.username.length > 10 || data.username)

    return response;
  }

  @Mutation(() => AuthDefaultResponse)
  async login(
    @Arg("data") data: LoginInput,
    @Ctx() { res }: IContext
  ): Promise<AuthDefaultResponse> {
    if (!data.email || !data.password)
      return {
        status: false,
        message: "Invalid Data !",
      };

    // treated email field as username in request input just till i change it in client side !
    const user = await User.findOne({
      where: [
        { email: data.email.toLowerCase() },
        { username: data.email.toLowerCase() },
      ],
    });
    if (!user) {
      return {
        status: false,
        message: "User not found !",
      };
    }
    if (user.banned) {
      return {
        status: false,
        message: "This account is banned !",
      };
    }
    const valid = await compare(data.password, user.password);
    if (!valid) {
      return {
        status: false,
        message: "wrong password !",
      };
    }

    // send refresh token as cookie
    const refreshToken = generateRefreshToken(user);
    sendRefreshToken(res, refreshToken);
    return {
      status: true,
      message: "Login successfuly",
      token: generateAccessToken(user),
      // send refresh token here is temporary solution for react native !
      rToken: refreshToken,
    };
  }

  @Mutation(() => AuthDefaultResponse)
  async register(
    @Arg("data") data: RegisterInput,
    @Ctx() { res }: IContext
  ): Promise<AuthDefaultResponse> {
    if (
      !data.name ||
      !data.email ||
      !data.password ||
      !data.username ||
      !data.birth ||
      !data.bmi ||
      !data.gender ||
      !data.height ||
      !data.weight ||
      !validateEmail(data.email) ||
      !validateUsername(data.username)
      //data.sc.length == 0
    ) {
      return {
        status: false,
        message: "Invalid Data !",
      };
    }

    try {
      const user = new User();
      user.name = data.name;
      user.email = data.email.toLowerCase();
      user.username = formatUsername(data.username.toLowerCase());
      user.password = await hash(data.password, 5);
      user.weight = data.weight;
      user.height = data.height;
      user.gender = data.gender;
      user.bmi = data.bmi;
      user.birth = data.birth;
      const sc: SpecialCondition[] = [];
      for (let s of data.sc) {
        const condition = await SpecialCondition.findOne({ where: { id: s } });
        if (condition) sc.push(condition);
      }
      if (sc.length !== data.sc.length) {
        return {
          status: false,
          message: "Some special conditions were not found ! ",
        };
      }
      user.specialconditions = sc;
      await user.save();
      // send account verification email !
      const _verificationToken = generateAccountVerificationToken(user);
      mg_verify_account(user, _verificationToken);
      // send refresh token as cookie
      const refreshToken = generateRefreshToken(user);
      sendRefreshToken(res, refreshToken);
      return {
        status: true,
        message: "User created successfuly !",
        token: generateAccessToken(user),
        // sending refresh token here is temporary solution for react native !
        rToken: refreshToken,
      };
    } catch (e) {
      console.log("something went wrong ! ", e);
      if (e.code == "ER_DUP_ENTRY") {
        let cause = "";
        const user = await User.findOne({ where: { username: data.username } });
        if (user) cause = "username";
        else cause = "email";
        return {
          status: false,
          message: `This ${cause} already exist !`,
        };
      }
      return {
        status: false,
        message: "Sonrthing went wrong !",
      };
    }
  }

  @UseMiddleware(isUserAuth)
  @Mutation(() => AuthDefaultResponse)
  async logout(@Ctx() ctx: IContext) {
    ctx.res.clearCookie("uid");
    return {
      status: true,
    };
  }
}
