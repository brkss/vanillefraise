import { Resolver, Query, UseMiddleware, Ctx } from 'type-graphql';
import { Activity } from '../../entity/Activity';
import { IContext } from '../../utils/types/Context';
import { isUserAuth } from '../../utils/middlewares/auth.mw';
import { User } from '../../entity/User';
import { getRepository } from 'typeorm';

@Resolver()
export class ActivityOverviewResolver {

  @UseMiddleware(isUserAuth)
  @Query(() => Number)
  async getUserBurnedCalories(@Ctx() ctx: IContext) : Promise<number>{
    const user = await User.findOne({
      where: {
        id: ctx.payload.userID
      }
    });
    if(!user){
      return 0;
    }

    const {sum} = await getRepository(Activity).createQueryBuilder('activities').select("SUM(calories)", 'sum').where('userID = :userid').setParameters({userid: user.id}).getRawOne();

    return sum;
  }
}