import { Resolver, Mutation, UseMiddleware, Arg, Ctx } from "type-graphql";
import {
  Activity,
  ActivityCategory,
  ActivityCalories,
} from "../../entity/Activity";
import { isUserAuth } from "../../utils/middlewares";
import { User } from "../../entity/User";
import { IContext } from "../../utils/types/Context";
import { CreateActivityResponse } from "../../utils/responses/activity";
import { CreateActivityInput } from "../../utils/inputs/activity";
//import { parseTime } from "../../utils/helpers";

@Resolver()
export class CreateActivityResolver {
  @UseMiddleware(isUserAuth)
  @Mutation(() => CreateActivityResponse)
  async createActivity(
    @Arg("data") data: CreateActivityInput,
    @Ctx() ctx: IContext
  ): Promise<CreateActivityResponse> {
    if (!data.category || !data.duration || !data.feedback) {
      return {
        status: false,
        message: "Invalid Data !",
      };
    }
    const user = await User.findOne({ where: { id: ctx.payload.userID } });
    const category = await ActivityCategory.findOne({
      where: { id: data.category },
    });
    if (!user || !category) {
      return {
        status: false,
        message: "Invalid User !",
      };
    }
    try {
      const activity = new Activity();
      activity.category = category;
      activity.user = user;
      activity.feedback = data.feedback;
      activity.duration = data.duration;
      activity.calories = await this.getUserBurnedCalories(
        data.duration,
        user,
        category
      );
      await activity.save();
      return {
        status: true,
        message: "Activity Created suuccessfuly ! ",
        burnedCalories: activity.calories,
      };
    } catch (e) {
      console.log("Somnething went wrong while creating activity !");
      return {
        status: false,
        message: "Something went wrong ! ",
      };
    }
  }

  async getUserBurnedCalories(
    time: string,
    user: User,
    category: ActivityCategory
  ): Promise<number> {
    console.log("time => ", time);
    //const parsedTime = parseTime(time);
    /*
    if (parsedTime.hours < 1 || parsedTime.minutes < 55) {
      return 0;
    }
    */
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
}
