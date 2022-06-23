import {
  Resolver,
  Mutation,
  Query,
  UseMiddleware,
  Arg,
  Ctx,
} from "type-graphql";
import { getData } from "../../utils/data/activity/calories.data";
import { ActivityCalories, ActivityCategory } from "../../entity/Activity";
import { isUserAuth } from "../../utils/middlewares";
import { IContext } from "../../utils/types/Context";
import { User } from "../../entity/User";
import { calculateActivityBurnedCalories } from "../../utils/helpers/activity/calculateBurnedCalories";

@Resolver()
export class ActivityCaloriesResolver {
  @UseMiddleware(isUserAuth)
  @Query(() => Number)
  async getActivityCalories(@Arg("cat") cat: string, @Ctx() ctx: IContext) {
    const user = await User.findOne({ where: { id: ctx.payload.userID } });
    if (!user) return -1;
    const category = await ActivityCategory.findOne({ where: { id: cat } });
    if (!category) return -1;
    const burned_calories = calculateActivityBurnedCalories(
      category,
      "1:00",
      user.weight
    );
    return burned_calories;
  }

  @Mutation(() => Boolean)
  async seedActivityCalories() {
    const acalories = await ActivityCalories.find();
    if (acalories.length == 0) {
      const categories = await ActivityCategory.find();
      const data = getData(categories);
      for (let d of data) {
        const cat_index = categories.findIndex((x) => x.id === d.category);
        if (cat_index != -1) {
          const ac = new ActivityCalories();
          ac.category = categories[cat_index];
          ac.name = d.name;
          ac.zone = d.zone;
          ac.val = d.val;
          await ac.save();
        }
      }
      return true;
    }
    return false;
  }
}
