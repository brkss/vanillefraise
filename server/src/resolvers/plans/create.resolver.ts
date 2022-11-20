import { Resolver, Mutation, UseMiddleware, Ctx, Arg } from "type-graphql";
import { isUserAuth } from "../../utils/middlewares";
import { CreatePlanResponse } from "../../utils/responses/plans";
import { IContext } from "../../utils/types/Context";
import { CreatePlanInput } from "../../utils/inputs/plan";
import { User } from "../../entity/User";
import { Plan, TrackedElement } from "../../entity/Plan";
import { Nutrition } from "../../entity/Nutrition/Nutrition";

@Resolver()
export class CreatePlanResolver {
  @UseMiddleware(isUserAuth)
  @Mutation(() => CreatePlanResponse)
  async createPlan(
    @Arg("data") data: CreatePlanInput,
    @Ctx() ctx: IContext
  ): Promise<CreatePlanResponse> {
    const user = await User.findOne({ where: { id: ctx.payload.userID } });
    if (!user) {
      return {
        status: false,
        message: "invalid user !",
      };
    }
    if (!data.name || data.elements.length === 0) {
      return {
        status: false,
        message: "Invalid Data !",
      };
    }

    try {
      const plan = new Plan();
      plan.name = data.name;
      plan.user = user;
      await plan.save();

      for (let element of data.elements) {
        const nutrition = await Nutrition.findOne({
          where: { id: element.nutrition_id },
        });
        if (!nutrition) continue;
        const trackedElement = new TrackedElement();
        trackedElement.plan = plan;
        trackedElement.nutriton = nutrition;
        trackedElement.quantity = element.quantity;
        await trackedElement.save();
      }

      return {
        status: true,
        message: "Plan Created Successfuly",
        plan: plan,
      };
    } catch (e) {
      console.log("somethinf went wrong creating plan : ", e);
      return {
        status: false,
        message: "Something went wrong !",
      };
    }
  }
}
