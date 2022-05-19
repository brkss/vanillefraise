import { Arg, Mutation, Query, Resolver, Ctx } from "type-graphql";
import { RegisterAdminInput } from "../../utils/inputs";
import { hash, compare } from "bcrypt";
import { Admin } from "../../entity/admin";
import { LoginAdminInput } from "../../utils/inputs";
import {
  generateAdminAccessToken,
  sendAdminRefreshToken,
} from "../../utils/token";
import { IContext } from "../../utils/types/Context";
import { AuthDefaultResponse } from "../../utils/responses";

@Resolver()
export class AdminAuthResolver {
  @Query(() => String)
  helloAdmin() {
    return "Hello Yourself !";
  }

  @Mutation(() => AuthDefaultResponse)
  async loginAdmin(
    @Arg("data") data: LoginAdminInput,
    @Ctx() { res }: IContext
  ): Promise<AuthDefaultResponse> {
    if (!data.username || !data.password) {
      return {
        status: false,
        message: "Invalid Data!",
      };
    }

    try {
      const admin = await Admin.findOne({ where: { username: data.username } });
      if (!admin) {
        return {
          status: false,
          message: "Invalid username !",
        };
      }

      const valid = await compare(data.password, admin.password);
      if (!valid)
        return {
          status: false,
          message: "Invalid Passoword !",
        };
      const _token = generateAdminAccessToken(admin);
      sendAdminRefreshToken(res, generateAdminAccessToken(admin));
      return {
        status: true,
        message: "Login successfuly",
        token: _token,
      };
    } catch (e) {
      console.log("Something went wrong : ", e);
      return {
        status: false,
        message: "Something went wrong !",
      };
    }
  }

  @Mutation(() => AuthDefaultResponse)
  async registerAdmin(
    @Arg("data") data: RegisterAdminInput,
    @Ctx() { res }: IContext
  ): Promise<AuthDefaultResponse> {
    if (!data.username || !data.password)
      return {
        status: true,
        message: "Invalid Data !",
      };

    try {
      const admin = new Admin();
      admin.email = data.email || undefined;
      admin.username = data.username;
      admin.password = await hash(data.password, 5);
      admin.name = data.name || undefined;
      await admin.save();
      const _token = generateAdminAccessToken(admin);
      sendAdminRefreshToken(res, generateAdminAccessToken(admin));
      return {
        status: true,
        message: "Admin Created successfuly ! ",
        token: _token,
      };
    } catch (e) {
      console.log("Something went wrong : ", e);
      return {
        status: false,
        message: "Something went wrong !",
      };
    }
  }
}
