import { Resolver, Mutation, Arg } from 'type-graphql';
import { Record, RecordCategory } from '../../entity/Record';
import { CreateRecordInput } from '../../utils/inputs/records';
import { CreateRecordResponse } from '../../utils/responses/records';

@Resolver()
export class CreateRecordResolver {

  @Mutation(() => CreateRecordResponse)
  async createRecord(@Arg('data') data : CreateRecordInput) : Promise<CreateRecordResponse>{

    if(!data || !data.date || !data.category || !data.time || !data.value){
      return {
        status: false,
        message: "Invalid Data !"
      }
    }
    try {
      const category = await RecordCategory.findOne({where : {id: data.category}});
      if(!category){
        return {
          status: false,
          message: "Category not found !"
        }
      }
      const record = new Record();
      record.category = category;
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
