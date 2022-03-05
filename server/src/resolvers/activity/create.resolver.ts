import { Resolver, Mutation, UseMiddleware, Arg, Ctx } from "type-graphql";
import { Activity, ActivityCategory } from "../../entity/Activity";
import { isUserAuth } from "../../utils/middlewares"; 
import { User } from '../../entity/User';
import {IContext} from "../../utils/types/Context";
import { CreateActivityResponse } from '../../utils/responses/activity';
import { CreateActivityInput } from '../../utils/inputs/activity'

@Resolver()
export class CreateActivityResolver {
  @UseMiddleware(isUserAuth)
  @Mutation(() => CreateActivityResponse)
  async createActivity(@Arg('data') data: CreateActivityInput, @Ctx() ctx: IContext) : Promise<CreateActivityResponse> {
    if(!data.category || !data.calories || !data.duration || !data.feedback){
      return {
        status: false,
        message: "Invalid Data !"
      }
    }
    const user = await User.findOne({where: {id: ctx.payload.userID}});
    const category = await ActivityCategory.findOne({where: {id: data.category}});
    if(!user || !category){
      return {
        status: false,
        message: "Invalid User !"
      }
    }
    
    try {
      const activity = new Activity();
      activity.category = category;
      activity.user = user;
      activity.feedback = data.feedback;
      activity.duration = data.duration;
      activity.calories = data.calories;
      await activity.save();
      return {
        status: true,
        message: "Activity Created suuccessfuly ! "
      }
    }catch(e){
      console.log("Somnething went wrong while creating activity !");
      return {
        status: false,
        message: "Something went wrong ! "
      }
    }
  }
}
