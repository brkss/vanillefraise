import { Resolver, Query, UseMiddleware, Ctx } from "type-graphql";
import { Activity } from "../../entity/Activity";
import { IContext } from "../../utils/types/Context";
import { isUserAuth } from "../../utils/middlewares/auth.mw";
import { User } from "../../entity/User";
import { getRepository } from "typeorm";
import { DietRecord } from "../../entity/Diet/Record";
import dayjs from "dayjs";
import { Like } from "typeorm";
import { ActivityDataResponse } from "../../utils/responses/activity";

@Resolver()
export class ActivityOverviewResolver {
  @UseMiddleware(isUserAuth)
  @Query(() => [ActivityDataResponse])
  async activitiesBurnedCaloriesData(
    @Ctx() ctx: IContext
  ): Promise<ActivityDataResponse[]> {
    const user = await User.findOne({
      where: { id: ctx.payload.userID },
    });
    if (!user) return [];
    const activities = await Activity.find({
      where: { user: user },
      order: { created_at: "DESC" },
      take: 7,
      //take: 8,
    });
    let result: ActivityDataResponse[] = new Array(7).fill({
      date: new Date(),
      count: 0,
    });
    result = result.map((_, i) => {
      return {
        date: dayjs()
          .subtract(7 - i, "d")
          .toDate(),
        count: 0,
      };
    });
    console.log("results : ", result);
    for (let activity of activities) {
      const index = result.findIndex(
        (x) => dayjs(x.date).diff(activity.created_at, "d") === 0
      );
      /* 
      if (index === -1) {
        result.push(
          Object.assign(
            {},
            { count: activity.calories || 0, date: activity.created_at }
          )
        );
      } else*/ if (index > -1) {
        result[index].count += activity.calories || 0;
      }
    }
    return result;
  }

  @UseMiddleware(isUserAuth)
  @Query(() => Number)
  async getUserBurnedCalories(@Ctx() ctx: IContext): Promise<number> {
    const user = await User.findOne({
      where: {
        id: ctx.payload.userID,
      },
    });
    if (!user) {
      return 0;
    }
    const { sum } = await getRepository(Activity)
      .createQueryBuilder("activities")
      .select("SUM(calories)", "sum")
      .where("userID = :userid")
      .andWhere("created_at >= CURRENT_DATE")
      //.andWhere("DATE(created_at) = CURDATE()")
      .setParameters({ userid: user.id })
      .getRawOne();
    console.log("SUM -> ", sum);
    const records = await DietRecord.find({
      where: {
        type: "BURNED_CALORIES",
        user: user,
        created_at: Like(`${dayjs().format("YYYY-MM-DD")}%`),
      },
    });
    const res =
      (sum === null ? 0 : Number(sum)) +
      records.reduce((s, e) => s + e.value, 0);
    return res;
  }
}
