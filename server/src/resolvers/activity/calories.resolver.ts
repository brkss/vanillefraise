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

@Resolver()
export class ActivityCaloriesResolver {
  @UseMiddleware(isUserAuth)
  @Query(() => Number)
  async getActivityCalories(@Arg("cat") cat: string, @Ctx() ctx: IContext) {
    if (!cat) return 0;
    const user = await User.findOne({
      id: ctx.payload.userID,
    });
    const category = await ActivityCategory.findOne({
      where: { id: cat },
    });
    if (!user || !category) return 0;
    if (!cat) return 0;
    const weight = user.weight;
    const caloriesHandBook = await ActivityCalories.find({
      where: { category: category },
    });

    if (caloriesHandBook.length == 0) return 0;
    let min: ActivityCalories = caloriesHandBook[0];
    for (let d of caloriesHandBook) {
      if (d.zone <= weight) min = d;
    }
    return min.val;
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
