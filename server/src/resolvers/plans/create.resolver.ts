import { Resolver, Mutation, UseMiddleware, Ctx, Arg } from 'type-graphql';
import { isUserAuth } from '../../utils/middlewares';
import { CreatePlanResponse } from '../../utils/responses/plans';
import {IContext} from '../../utils/types/Context';

@Resolver()
export class CreatePlasResolver {


  @UseMiddleware(isUserAuth)
  @Mutation(() => CreatePlanResponse)
  async createPlan(@Ctx() ctx: IContext) : Promise<CreatePlanResponse>{


    return {
      status: false
    }

  }
}
