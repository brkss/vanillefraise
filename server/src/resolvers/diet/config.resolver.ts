import { Resolver, Mutation, UseMiddleware, Arg } from "type-graphql";
import { isUserAuth } from "../../utils/middlewares/auth.mw";
import { DefaultResponse } from "../../utils/responses/default.response";
import { ConfigDietInput } from '../../utils/inputs';
import { MacrosConfig } from '../../entity/Diet';

@Resolver()
export class DietConfigResolver {
  @UseMiddleware(isUserAuth)
  @Mutation(() => DefaultResponse)
  async configDiet(
    @Arg("data") data: ConfigDietInput 
  ): Promise<DefaultResponse> {
    if(!data || !data.activity_factor){
      return {
        status: false,
        message: "Invalid Data !"
      }
    }

    try{
      const mc = new MacrosConfig();
      mc.activityFactor = data.activity_factor;
      mc.carbs = data.carbs;
      mc.fat = data.fat;
      mc.protein = data.protein;
      await mc.save();
      return {
        status: true,
        message: "Diet Configed Successfuly !"
      }
    }catch(e){
      console.log("Sonething went wrong ! ", e);
      return {
        status: false,
        message: "Something went wrong !"
      }
    }
  }
}
