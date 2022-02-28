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
import { SpecialCondition } from '../entity/UserInfo';
import { hash, compare } from "bcrypt";
import {
  generateAccessToken,
  generateRefreshToken,
  sendRefreshToken,
} from "../utils/token";
import { IContext } from "../utils/types/Context";
import { isUserAuth } from "../utils/middlewares";


@Resolver()
export class UserResolver {
  @Query(() => String)
  ping() {
    return "pong";
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
      where: [{ email: data.email }, { username: data.email }],
    });
    if (!user) {
      return {
        status: false,
        message: "User not found !",
      };
    }
    const valid = await compare(data.password, user.password);
    if (!valid) {
      return {
        status: false,
        message: "Wrong password !",
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
      data.sc.length == 0
    ) {
      return {
        status: false,
        message: "Invalid Data !",
      };
    }

    try {
      const user = new User();
      user.name = data.name;
      user.email = data.email;
      user.username = data.username;
      user.password = await hash(data.password, 5);
      user.weight = data.weight;
      user.height = data.height;
      user.gender = data.gender;
      user.bmi = data.bmi;
      user.birth = data.birth;
      
      const sc : SpecialCondition[] = [];
      for(let s of data.sc){
        const condition = await SpecialCondition.findOne({where: { id: s }});
        if(condition)
          sc.push(condition);
      }
      if(sc.length !== data.sc.length){
        return {
          status: false,
          message: "Some special conditions were not found ! "
        }
      }
      user.specialconditions = sc;
      await user.save();
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
