import { Resolver, Query, UseMiddleware, Ctx} from 'type-graphql';
import { User } from '../../entity/User';
import { IContext } from '../../utils/types/Context';
import { isUserAuth } from '../../utils/middlewares'

@Resolver()
export class UserInfoResolver {

  @UseMiddleware(isUserAuth)
  @Query(() => User, {nullable: true})
  async me(@Ctx() ctx: IContext) : Promise<User | null> {
    return await User.findOne({where: {id: ctx.payload.userID}}) || null;
  }

}
