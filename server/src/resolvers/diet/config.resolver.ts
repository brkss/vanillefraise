import { Resolver, Mutation, UseMiddleware, Arg, Ctx, Query } from "type-graphql";
import { isUserAuth } from "../../utils/middlewares/auth.mw";
import { DefaultResponse } from "../../utils/responses/default.response";
import { ConfigDietInput } from "../../utils/inputs";
import { MacrosConfig, DietFoodFilter } from "../../entity/Diet";
import { User } from "../../entity/User";
import { IContext } from "../../utils/types/Context";
import { HealthLabelRefrence } from "../../entity/Nutrition/HealthLabelReference";

@Resolver()
export class DietConfigResolver {
  @UseMiddleware(isUserAuth)
  @Mutation(() => DefaultResponse)
  async configDiet(
    @Arg("data") data: ConfigDietInput,
    @Ctx() ctx: IContext
  ): Promise<DefaultResponse> {
    if (!data || !data.activity_factor) {
      return {
        status: false,
        message: "Invalid Data !",
      };
    }
    const user = await User.findOne({ where: { id: ctx.payload.userID } });
    if (!user) {
      return {
        status: false,
        message: "Invalid User ! ",
      };
    }
    try {
      const mc = new MacrosConfig();
      mc.activityFactor = data.activity_factor;
      mc.carbs = data.carbs;
      mc.fat = data.fat;
      mc.protein = data.protein;
      await mc.save();
      await DietFoodFilter.delete({ user: user }); // delete all old filters if exist !
      // create filters
      if (data.filters.length > 0) {
        for (let filter of data.filters) {
          const label = await HealthLabelRefrence.findOne({
            where: { id: filter },
          });
          if (!label) continue;
          const ff = new DietFoodFilter();
          ff.user = user;
          ff.healthlabel = label;
          await ff.save();
        }
      }
      return {
        status: true,
        message: "Diet Configed Successfuly !",
      };
    } catch (e) {
      console.log("Sonething went wrong ! ", e);
      return {
        status: false,
        message: "Something went wrong !",
      };
    }
  }

  @UseMiddleware(isUserAuth)
  async getDietConfig() : Promise<Diet>
  @Query()
}
