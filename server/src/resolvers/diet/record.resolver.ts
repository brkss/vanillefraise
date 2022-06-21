/*
"WEIGHT",
"IN-CALORIES",
"OUT-CALORIES",
"IN-BU-CALORIES",
"OUT-BU-CALORIES",
"MACRONUTRIENT",
*/
import { DefaultResponse } from "../../utils/responses";
import {
  Resolver,
  Mutation,
  UseMiddleware,
  Ctx,
  Arg,
} from "type-graphql";
import { CreateDietRecordInput } from "../../utils/inputs/diet/createrecord.input";
import { isUserAuth } from "../../utils/middlewares/auth.mw";
import { User } from "../../entity/User";
import { IContext } from "../../utils/types/Context";
import { DietRecord } from "../../entity/Diet/Record";

@Resolver()
export class DietRecordResolver {
  @UseMiddleware(isUserAuth)
  @Mutation(() => DefaultResponse)
  async createDietRecord(
    @Arg("data") data: CreateDietRecordInput,
    @Ctx() ctx: IContext
  ): Promise<DefaultResponse> {
    if (!data || !data.unit || !data.type || !data.value)
      return {
        status: false,
        message: "Invalid Data",
      };
    const user = await User.findOne({ where: { id: ctx.payload.userID } });
    if (!user) {
      return {
        status: false,
        message: "invalid user !",
      };
    }
    if (data.type.toUpperCase() === "WEIGHT") user.weight = data.value;
    if (data.type.toUpperCase() === "HEIGHT") user.height = data.value;
    await user.save();
    const record = new DietRecord();
    record.user = user;
    record.value = data.value;
    record.unit = data.unit;
    record.type = data.type;
    await record.save();
    return {
      status: true,
      message: "Diet Record Created Successfuly",
    };
  }
}
