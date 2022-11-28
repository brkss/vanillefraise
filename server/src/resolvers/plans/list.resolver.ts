import { Resolver, Query, Arg, UseMiddleware, Ctx } from "type-graphql";
//import { IPlan } from "../../utils/types/Plan";
//import { data } from "../../utils/data/tmp-plans/data";
import { Plan } from "../../entity/Plan";
import { isUserAuth } from "../..//utils/middlewares";
import { IContext } from "../../utils/types/Context";
import { User } from "../../entity/User";

@Resolver()
export class PlansListResolver {
  @UseMiddleware(isUserAuth)
  @Query(() => [Plan])
  async plans(@Ctx() ctx: IContext): Promise<Plan[]> {
    const user = await User.findOne({ where: { id: ctx.payload.userID } });
    if (!user) return [];
    const plans = await Plan.find({
      where: [{ user: user, public: false }, {public: true}],
      relations: ["trackedElements", "trackedElements.nutriton"],
    });
    return plans;
  }

  @UseMiddleware(isUserAuth)
  @Query(() => Plan, { nullable: true })
  async planDetails(
    @Arg("id") id: string,
    @Ctx() ctx: IContext
  ): Promise<Plan | null> {
    const user = await User.findOne({ where: { id: ctx.payload.userID } });
    if (!user) return null;
    const plan = await Plan.findOne({
      where: [{ id: id, user: user, public: false }, {id: id, public: true}],
      relations: ["trackedElements", "trackedElements.nutriton"],
    });
    return plan || null;
  }
}
