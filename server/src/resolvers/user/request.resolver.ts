import { Resolver, Mutation, Query, UseMiddleware, Arg, Ctx } from 'type-graphql';
import { User } from '../../entity/User'
import { EarlyAccessRequest } from '../../entity/UserInfo/EarlyAccess';
import { isUserAuth } from '../../utils/middlewares';
import {IContext} from '../../utils/types/Context';

@Resolver()
export class RequestEarlyAccessResolver { 

  @UseMiddleware(isUserAuth)
  @Mutation(() => Boolean)
  async requestEarlyAccess(@Arg('service') service : string, @Ctx() ctx: IContext){
    
    const user = await User.findOne({where: {id: ctx.payload.userID}});
    if(!user)
      return false;
    const rq = await EarlyAccessRequest.find({where: {user: user, service: service}});
    if(rq.length > 0)
      return false;
    const request = new EarlyAccessRequest();
    request.user = user;
    request.service = service;
    await request.save();
    return true;
  }

  @UseMiddleware(isUserAuth)
  @Query(() => Boolean)
  async isRequested(@Arg('service') service: string, @Ctx() ctx: IContext){
    const user = await User.findOne({where: {id: ctx.payload.userID}});
    if(!user)
      return false;
    const rq = await EarlyAccessRequest.find({where: {user: user, service: service}});
    if(rq.length > 0)
      return true;
    return false;
  }
}
