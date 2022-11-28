import {
  Resolver,
  //Query,
  Ctx,
  Arg,
  UseMiddleware,
  Mutation,
  Query,
} from "type-graphql";
import { User } from "../../entity/User";
import { isUserAuth } from "../../utils/middlewares";
import { Plan } from "../../entity/Plan";
import { IContext } from "../../utils/types/Context";
import {
  TogglePlanTrackingResponse,
  TrackingPlanResponse,
} from "../../utils/responses/plans";
//import { CookedRecipe } from '../../entity/UserInfo/CookedRecipe'
import { getTokenNutrition } from "../../utils/helpers/nutrition";

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

  @UseMiddleware(isUserAuth)
  @Query(() => [TrackingPlanResponse])
  async tracking(@Ctx() ctx: IContext): Promise<TrackingPlanResponse[]> {
    const user = await User.findOne({ where: { id: ctx.payload.userID } });
    if (!user) return [];
    const plans = await Plan.find({
      where: [
        { user: user, public: false, active: true },
        { public: true, active: true },
      ],
      relations: ["trackedElements", "trackedElements.nutriton"],
    });

    const response: TrackingPlanResponse[] = [];
    for (let plan of plans) {
      const obj: TrackingPlanResponse = {
        plan: plan,
        elements: await Promise.all(
          plan.trackedElements.map(async (item) => ({
            current: await getTokenNutrition(user, item.nutriton.code),
            name: item.nutriton.name,
            target: item.quantity,
            unit: item.nutriton.unit,
            code: item.nutriton.code,
            id: item.id
          }))
        ),
      };
      response.push(obj);
    }

    return response;
  }
}
