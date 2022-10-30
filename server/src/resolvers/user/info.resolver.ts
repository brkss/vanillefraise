import {
  Resolver,
  Query,
  UseMiddleware,
  Ctx,
  Arg,
  Mutation,
} from "type-graphql";
import { User } from "../../entity/User";
import { IContext } from "../../utils/types/Context";
import { isUserAuth } from "../../utils/middlewares";
import { DefaultResponse } from "../../utils/responses";
import { UpdateUserInfoInput } from "../../utils/inputs/user";
import { calcBMR } from "../../utils/helpers/user/bmr";

@Resolver()
export class UserInfoResolver {
  @UseMiddleware(isUserAuth)
  @Query(() => User, { nullable: true })
  async me(@Ctx() ctx: IContext): Promise<User | null> {
    return (await User.findOne({ where: { id: ctx.payload.userID } })) || null;
  }

  @UseMiddleware(isUserAuth)
  @Mutation(() => DefaultResponse)
  async updateInfo(
    @Arg("data") data: UpdateUserInfoInput,
    @Ctx() ctx: IContext
  ): Promise<DefaultResponse> {
    if (!data.name || !data.height || !data.weight)
      return {
        status: false,
        message: "Invalid Input !",
      };

    const user = await User.findOne({ where: { id: ctx.payload.userID } });
    if (!user) {
      return {
        status: false,
        message: "Invalid User !",
      };
    }

    try {
      user.name = data.name;
      if (user.height != data.height || data.weight != user.weight) {
        const bmi = calcBMR(
          user.birth,
          data.weight,
          data.height,
          user.gender.toUpperCase()
        );
        user.height = data.height;
        user.weight = data.weight;
        user.bmi = bmi;
      }
      await user.save();
      return {
        status: true,
        message: "Data updated successfuly !",
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
