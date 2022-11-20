import { Resolver, Query, Arg, UseMiddleware, Ctx } from "type-graphql";
import { IPlan } from "../../utils/types/Plan";
import { data } from "../../utils/data/tmp-plans/data";
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
      where: { user: user },
      relations: ["trackedElements", "trackedElements.nutriton"],
    });
    return plans;
  }

  @Query(() => IPlan, { nullable: true })
  async planDetails(@Arg("id") id: string) {
    if (!id) return null;
    const item = data.find((x) => x.id === id);
    if (!item) return null;
    return item;
  }
}
