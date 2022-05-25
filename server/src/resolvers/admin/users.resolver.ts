import { DefaultResponse } from "../../utils/responses";
import { Resolver, Query, UseMiddleware, Mutation, Arg } from "type-graphql";
import { User } from "../../entity/User";
import { isAdminAuth } from "../../utils/middlewares/admin.mw";
import { AdminUserResponse } from "../../utils/responses/admin";

@Resolver()
export class AdminUserResolver {
  @UseMiddleware(isAdminAuth)
  @Query(() => [AdminUserResponse])
  async adminGetUsers(): Promise<AdminUserResponse[]> {
    const users = await User.find();
    let data: AdminUserResponse[] = [];

    for (let u of users) {
      const obj: AdminUserResponse = {
        user: u,
      };
      data.push(obj);
    }
    return data;
  }

  @UseMiddleware(isAdminAuth)
  @Mutation(() => DefaultResponse)
  async banUser(@Arg("uid") uid: string): Promise<DefaultResponse> {
    if (!uid) {
      return {
        status: false,
        message: "Invalid User ID !",
      };
    }
    const user = await User.findOne({
      where: { id: uid },
    });
    if (!user) {
      return {
        status: false,
        message: "Invalid User !",
      };
    }

    try {
      user.banned = !user.banned;
      await user.save();
      //await user.remove();
      return {
        status: true,
        message: "User's Ban status changed successfuly !",
      };
    } catch (e) {
      console.log("Something went wrong deleting user : ", e);
      return {
        status: false,
        message: "Something went wrong deleting user !",
      };
    }
  }
}
