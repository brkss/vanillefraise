import { Resolver, Query, UseMiddleware, Arg, Ctx } from "type-graphql";
import { isUserAuth } from "../../utils/middlewares";
import { Record, RecordCategory } from "../../entity/Record";
import { IContext } from "../../utils/types/Context";
import { ListRecordsResponse } from "../../utils/responses/records";
import { User } from "../../entity/User";

@Resolver()
export class RecordListResolver {
  @UseMiddleware(isUserAuth)
  @Query(() => ListRecordsResponse)
  async records(
    @Arg("cat_id") cat_id: number,
    @Ctx() ctx: IContext
  ): Promise<ListRecordsResponse> {
    const user = await User.findOne({ where: { id: ctx.payload.userID } });
    const category = await RecordCategory.findOne({ where: { id: cat_id } });
    if (!user || !category) {
      return {
        status: false,
        message: "Invalid Category !",
      };
    }
    return {
      status: true,
      records: await Record.find({
        where: { user: user, category: category },
        relations: ["category"],
      }),
    };
  }
}
