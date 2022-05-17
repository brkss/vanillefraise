import { DefaultResponse } from "../../utils/responses";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { RegisterAdminInput } from "../../utils/inputs";
import { hash } from "bcrypt";
import { Admin } from "../../entity/admin";

@Resolver()
export class AdminAuthResolver {
  @Query(() => String)
  helloAdmin() {
    return "Hello Yourself !";
  }

  @Mutation(() => DefaultResponse)
  async RegisterAdmin(
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
