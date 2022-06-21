import {
  Resolver,
  Mutation,
  UseMiddleware,
  Arg,
  Ctx,
  Query,
} from "type-graphql";
import { isUserAuth } from "../../utils/middlewares/auth.mw";
import { ConfigDietInput } from "../../utils/inputs";
import { MacrosConfig, DietFoodFilter } from "../../entity/Diet";
import { User } from "../../entity/User";
import { IContext } from "../../utils/types/Context";
import { HealthLabelRefrence } from "../../entity/Nutrition/HealthLabelReference";
import {
  DietConfigResponse,
  CreateDietConfigResponse,
} from "../../utils/responses/diet";
import { calculateREE, calculateTDEE } from '../../utils/helpers/macros';

@Resolver()
export class DietConfigResolver {
  @UseMiddleware(isUserAuth)
  @Mutation(() => CreateDietConfigResponse)
  async configDiet(
    @Arg("data") data: ConfigDietInput,
    @Ctx() ctx: IContext
  ): Promise<CreateDietConfigResponse> {
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
      const exist = await MacrosConfig.findOne({ where: { user: user } });
      if (exist) await exist.remove();
      const mc = new MacrosConfig();
      mc.activityFactor = data.activity_factor;
      mc.carbs = data.carbs;
      mc.fat = data.fat;
      mc.protein = data.protein;
      mc.user = user;
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
      const filters = await DietFoodFilter.find({
        where: { user: user },
        relations: ["healthlabel"],
      });
      // update user's data !
      if (user.weight !== data.weight) user.weight = data.weight;
      if (user.height !== data.height) user.height = data.height;
      await user.save();
      const ree = calculateREE(user.gender, user.weight, user.height, user.birth);
      const tdee = calculateTDEE(data.activity_factor, ree);
      return {
        status: true,
        message: "Diet Configed Successfuly !",
        data: {
          status: true,
          config: mc,
          filters: filters.map((filter) => filter.healthlabel),
        },
        macros: {
          status: true,
          ree: ree,
          tdee: tdee
        }
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
  @Query(() => DietConfigResponse)
  async getDietConfig(@Ctx() ctx: IContext): Promise<DietConfigResponse> {
    const user = await User.findOne({
      where: { id: ctx.payload.userID },
      relations: ["config"],
    });
    if (!user)
      return {
        status: false,
      };
    //const config = await MacrosConfig.findOne({ where: { user: user } });
    //if (!config)
    //return {
    //status: false,
    //};
    if (!user.config) {
      return {
        status: false,
      };
    }
    const filter = await DietFoodFilter.find({
      where: { user: user },
      relations: ["healthlabel"],
    });
    return {
      status: true,
      config: user.config,
      filters: filter.map((filter) => filter.healthlabel),
    };
  }
}
