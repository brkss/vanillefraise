import { Ctx, Resolver, Query, UseMiddleware } from 'type-graphql';
import { isUserAuth } from '../../utils/middlewares';
import { IContext } from '../../utils/types/Context';
import { User } from '../../entity/User';
import { Activity } from '../../entity/Activity';

@Resolver()
export class ActivityListResolver {

  @UseMiddleware(isUserAuth)
  @Query(() => [Activity])
  async activities(@Ctx() ctx: IContext) : Promise<Activity[]> {
    
    const user = await User.findOne({where: {id: ctx.payload.userID}});
    if(!user)
      return [];
    const activities = await Activity.find({
      where: {user: user},
      order: {created_at: 'DESC'},
      relations: ['category']
    })
    return activities;
  }

}
