import { isUserAuth } from "../../utils/middlewares";
import { IContext } from "../../utils/types/Context";
import {
  Resolver,
  Query,
  Mutation,
  Arg,
  UseMiddleware,
  Ctx,
} from "type-graphql";
import { Mood, MoodRecord } from "../../entity/Mental";
import { moods_data } from "../../utils/data/mood.data";
import { DefaultResponse } from "../../utils/responses";
import { User } from "../../entity/User";
import { CreateMoodRecordInput } from "../../utils/inputs/mental";

@Resolver()
export class MoodResolver {
  @Mutation(() => Boolean)
  async seedMoodCategories(): Promise<boolean> {
    const moods = await Mood.find();
    if (moods.length == 0) {
      for (let m of moods_data) {
        const mood = new Mood();
        mood.name = m.name;
        mood.icon = m.icon;
        await mood.save();
      }
      return true;
    }
    return false;
  }

  @Query(() => [Mood])
  async moods(): Promise<Mood[]> {
    return await Mood.find();
  }

  @UseMiddleware(isUserAuth)
  @Mutation(() => DefaultResponse)
  async createMoodRecord(
    @Arg("data") data: CreateMoodRecordInput,
    @Ctx() ctx: IContext
  ): Promise<DefaultResponse> {
    if (!data || !data.moods || data.moods.length == 0) {
      return {
        status: false,
        message: "Invalid Data !",
      };
    }
    try {
      const user = await User.findOne({ where: { id: ctx.payload.userID } });
      const moods: Mood[] = [];
      for (let moodId of data.moods) {
        const mood = await Mood.findOne({ where: { id: moodId } });
        if (mood) moods.push(mood);
      }
      if (!user || moods.length !== data.moods.length) {
        return {
          status: false,
          message: "Invalid User !",
        };
      }
      for (let mood of moods) {
        const record = new MoodRecord();
        record.mood = mood;
        record.user = user;
        record.date = new Date();
        await record.save();
      }
      return {
        status: true,
        message: "Mood Record Created Successfuly !",
      };
    } catch (e) {
      console.log("Something went wrong while creating mood record : ", e);
      return {
        status: false,
        message: "Something went wrong !",
      };
    }
  }
}
