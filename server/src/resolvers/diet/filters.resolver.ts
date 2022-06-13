import { Resolver, Query, UseMiddleware, Ctx } from "type-graphql";
import { isUserAuth } from "../../utils/middlewares/auth.mw";
import { HealthLabelRefrence } from "../../entity/Nutrition";
import { User } from "../../entity/User";
import { IContext } from "../../utils/types/Context";

@Resolver()
export class FoodFilterResolver {
  @UseMiddleware(isUserAuth)
  @Query(() => [HealthLabelRefrence])
  async activeFoodFilters(
    @Ctx() ctx: IContext
  ): Promise<HealthLabelRefrence[]> {
    const user = await User.findOne({
      where: { id: ctx.payload.userID },
      relations: ["filters", "filters.healthlabel"],
    });
    if (!user) {
      return [];
    }
    return user.filters.map((filter) => filter.healthlabel);
  }
}
