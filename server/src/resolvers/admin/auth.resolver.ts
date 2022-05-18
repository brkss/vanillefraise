import { DefaultResponse } from "../../utils/responses";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { RegisterAdminInput } from "../../utils/inputs";
import { hash, compare } from "bcrypt";
import { Admin } from "../../entity/admin";
import { LoginAdminInput } from "../../utils/inputs";

@Resolver()
export class AdminAuthResolver {
  @Query(() => String)
  helloAdmin() {
    return "Hello Yourself !";
  }

  @Mutation(() => DefaultResponse)
  async loginAdmin(
    @Arg("data") data: LoginAdminInput
  ): Promise<DefaultResponse> {
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
      return {
        status: true,
        message: "Login successfuly",
      };
    } catch (e) {
      console.log("Something went wrong : ", e);
      return {
        status: false,
        message: "Something went wrong !",
      };
    }
  }

  @Mutation(() => DefaultResponse)
  async registerAdmin(
    @Arg("data") data: RegisterAdminInput
  ): Promise<DefaultResponse> {
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
      return {
        status: true,
        message: "Admin Created successfuly ! ",
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
