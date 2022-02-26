import { Resolver, Mutation, Arg, UseMiddleware, Ctx } from 'type-graphql';
import { Record, RecordCategory } from '../../entity/Record';
import { CreateRecordInput } from '../../utils/inputs/records';
import { CreateRecordResponse } from '../../utils/responses/records';
import { isUserAuth } from '../../utils/middlewares/auth.mw'; 
import {IContext} from '../../utils/types/Context';
import {User} from '../../entity/User';

@Resolver()
export class CreateRecordResolver {

  @UseMiddleware(isUserAuth)
  @Mutation(() => CreateRecordResponse)
  async createRecord(@Arg('data') data : CreateRecordInput, @Ctx() ctx: IContext) : Promise<CreateRecordResponse>{

    if(!data || !data.date || !data.category || !data.time || !data.value || !ctx.payload || !ctx.payload.userID){
      return {
        status: false,
        message: "Invalid Data !"
      }
    }
    try {
      const user = await User.findOne({where: {id: ctx.payload.userID}});
      const category = await RecordCategory.findOne({where : {id: data.category}});
      if(!category || !user){
        return {
          status: false,
          message: "Category not found !"
        }
      }
      const record = new Record();
      record.category = category;
      record.user = user;
      record.value = data.value;
      record.time = data.time;
      record.date = data.date;
      await record.save();
      return {
        status: true,
        message: "Record Created successfuly !",
        record: record
      }
    }catch(e){
      console.log("Sonmething went wrong creating record : ", e);
      return {
        status: false,
        message: "Something went wrong !"
      }
    }

  }

}
