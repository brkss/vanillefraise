import { Resolver, Query, UseMiddleware, Ctx } from "type-graphql";
import { isUserAuth } from "../../utils/middlewares/auth.mw";
import { IContext } from "../../utils/types/Context";
import { UserMacrosResponse } from "../../utils/responses/diet/macros.response";
import { User } from "../../entity/User";
import { calculateREE, calculateTDEE } from "../../utils/helpers/user/macros";

@Resolver()
export class MacrosResolver {
  @UseMiddleware(isUserAuth)
  @Query(() => UserMacrosResponse)
  async macros(@Ctx() ctx: IContext): Promise<UserMacrosResponse> {
    const user = await User.findOne({
      where: { id: ctx.payload.userID },
      relations: ["config"],
    });
    if (!user) return { status: false, message: "Invalid User !" };

    const ree = calculateREE(user.gender, user.weight, user.height, user.birth);
    const tdee = calculateTDEE(user.config ? user.config.activityFactor : 0, ree);
    return {
      status: true,
      ree: ree,
      tdee: tdee,
    };
  }
}

