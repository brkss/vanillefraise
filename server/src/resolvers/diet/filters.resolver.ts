import {
  Resolver,
  Query,
  UseMiddleware,
  Ctx,
  Mutation,
  Arg,
} from "type-graphql";
import { isUserAuth } from "../../utils/middlewares/auth.mw";
import { HealthLabelRefrence } from "../../entity/Nutrition";
import { User } from "../../entity/User";
import { IContext } from "../../utils/types/Context";
import { DietFoodFilter } from "../../entity/Diet/FoodFilter";

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

  @UseMiddleware(isUserAuth)
  @Mutation(() => [HealthLabelRefrence])
  async saveFoodFilters(
    @Arg("data", () => [String]) data: string[],
    @Ctx() ctx: IContext
  ): Promise<HealthLabelRefrence[]> {
    if (!data) return [];
    let user = await User.findOne({
      where: {
        id: ctx.payload.userID,
      },
      relations: ["filters", "filters.healthlabel"],
    });
    if (!user) return [];
    user.filters = [];
    await user.save();
    for (let item of data) {
      const label = await HealthLabelRefrence.findOne({ where: { id: item } });
      if (
        !label ||
        user.filters.findIndex((x) => x.healthlabel.id === item) !== -1
      )
        continue;
      const filter = new DietFoodFilter();
      filter.user = user;
      filter.healthlabel = label;
      await filter.save();
    }
    user = await User.findOne({
      where: {
        id: ctx.payload.userID,
      },
      relations: ["filters", "filters.healthlabel"],
    });

    return user!.filters.map((filter) => filter.healthlabel);
  }
}
