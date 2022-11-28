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
import { Plan, UserPlan } from "../../entity/Plan";
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
        { id: planId, user: user },
      ],
    });
    if (!plan) {
      return {
        status: false,
        message: "Plan not found !",
      };
    }
    let current = true;
    let userPlan = await UserPlan.findOne({where: {user: user, plan}});
    if(!userPlan){
      userPlan = new UserPlan()
      userPlan.user = user;
      userPlan.plan = plan;
      await userPlan.save();
    }else {
      await userPlan.remove();
      current = false;
    }

    return {
      status: true,
      current: current,
    };
  }

  @UseMiddleware(isUserAuth)
  @Query(() => [TrackingPlanResponse])
  async tracking(@Ctx() ctx: IContext): Promise<TrackingPlanResponse[]> {
    const user = await User.findOne({ where: { id: ctx.payload.userID } });
    if (!user) return [];
    const data = await Plan.find({
      where: [
        { user: user, public: false },
        { public: true },
      ],
      relations: ["trackedElements", "trackedElements.nutriton"],
    });

    const plans : Plan[] = [];  
    for(let p of data){
      const userPlan = await UserPlan.findOne({where: {user: user, plan: p}});
      if(userPlan){
        plans.push(p);
      }
    }

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
