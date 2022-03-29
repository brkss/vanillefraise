import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from 'type-graphql';
import { ChangePasswordInput } from '../../utils/inputs/auth';
import { ChangePasswordResponse } from '../../utils/responses/auth';
import { isUserAuth } from '../../utils/middlewares';
import {IContext} from 'src/utils/types/Context';
import { User } from '../../entity/User';
import bcrypt from 'bcrypt';


@Resolver()
export class UserPasswordResolver {

  @UseMiddleware(isUserAuth)
  @Mutation(() => ChangePasswordResponse)
  async changePassword(@Arg('data') data : ChangePasswordInput, @Ctx() ctx: IContext) : Promise<ChangePasswordResponse>{

    if(!data || !data.newpass || !data.oldpass){
      return {
        status: false,
        message: "Invalid Data !"
      }
    }

    const user = await User.findOne({where: {id: ctx.payload.userID}});
    if(!user){
      return {
        status: false,
        message: "User Not Found !"
      }
    }

    const verify = await bcrypt.compare(data.newpass, user.password);
    if(!verify){
      return{
        status: false,
        message: "Invaid Password !"
      }
    }
    user.password = await bcrypt.hash(data.newpass, 5);
    await user.save();
    return {
      status: true,
      message: "Your password has been changed !"
    }


  }

}
