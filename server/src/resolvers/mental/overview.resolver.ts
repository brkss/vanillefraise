import { Resolver, Query, UseMiddleware, Ctx } from "type-graphql";
import { User } from "../../entity/User";
import { MoodRecord, Mood } from "../../entity/Mental";
import { isUserAuth } from "../../utils/middlewares";
import { IContext } from "../../utils/types/Context";
import {
  MoodOverviewResponse,
  MoodOverviewData,
} from "../../utils/responses/mental";

@Resolver()
export class MoodOverviewResolver {
  @UseMiddleware(isUserAuth)
  @Query(() => MoodOverviewResponse)
  async moodOverview(@Ctx() ctx: IContext): Promise<MoodOverviewResponse> {
    const user = await User.findOne({ where: { id: ctx.payload.userID } });
    if (!user) {
      return {
        status: false,
        message: "Invalid User !",
      };
    }
    const records = await MoodRecord.find({
      where: { user: user },
      relations: ["mood"],
    });
    const moods = await Mood.find();
    const count = records.length;
    // get stats;
    const data: MoodOverviewData[] = [];
    moods.map((mood) => {
      const obj = {
        name: mood.name,
        icon: mood.icon,
        id: mood.id,
        percent:
          (records.filter((x) => x.mood.id == mood.id).length * 100) / count ||
          0,
      };
      data.push(obj);
    });

    return {
      status: true,
      data: data,
    };
  }
}
