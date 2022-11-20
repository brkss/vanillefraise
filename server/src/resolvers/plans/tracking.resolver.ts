import {
  Resolver,
  Query,
  Ctx,
  Arg,
  UseMiddleware,
  Mutation,
} from "type-graphql";
import { User } from "../../entity/User";
import { isUserAuth } from "../../utils/middlewares";
import { Plan } from "../../entity/Plan";
import { IContext } from "../../utils/types/Context";
import { TogglePlanTrackingResponse } from "../../utils/responses/plans";

@Resolver()
export class PlanTrackingResolver {
  @UseMiddleware(isUserAuth)
  @Mutation(() => TogglePlanTrackingResponse)
  async togglePlanTracking(
    @Arg("planId") planId: string,
    @Ctx() ctx: IContext
  ): Promise<TogglePlanTrackingResponse> {
    const user = await User.findOne({ where: { id: ctx.payload.userID } });
    if (!user) {
      return {
        status: false,
        message: "Invalid user !",
      };
    }

    const plan = await Plan.findOne({
      where: [
        { id: planId, public: true },
        { id: planId, user: user, public: false },
      ],
    });
    if (!plan) {
      return {
        status: false,
        message: "Plan not found !",
      };
    }
    plan.active = !plan.active;
    await plan.save();
    return {
      status: true,
      current: plan.active,
    };
  }
}
