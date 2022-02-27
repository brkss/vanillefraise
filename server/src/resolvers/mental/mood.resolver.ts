import {isUserAuth} from '../../utils/middlewares';
import {IContext} from '../../utils/types/Context';
import { Resolver, Query, Mutation, Arg, UseMiddleware, Ctx} from 'type-graphql';
import { Mood, MoodRecord } from '../../entity/Mental';
import { moods_data } from '../../utils/data/mood.data';
import { DefaultResponse } from '../../utils/responses'
import { User } from '../../entity/User';

@Resolver()
export class MoodResolver {
  
  @Mutation(() => Boolean)
  async seedMoodCategories() : Promise<boolean>{

    const moods = await Mood.find();
    if(moods.length == 0){
      for(let m of moods_data){
        const mood = new Mood();
        mood.name = m.name;
        mood.icon = m.icon;
        await mood.save();
      }
      return true;
    }
    return false;
  }

  @Query(() => [Mood])
  async moods() : Promise<Mood[]> {
    return await Mood.find();
  }

  @UseMiddleware(isUserAuth)
  @Mutation(() => DefaultResponse)
  async createMoodRecord(@Arg('mood_id') mood_id: string, @Ctx() ctx: IContext) : Promise<DefaultResponse> {

    if(!mood_id){
      return {
        status: false,
        message: "Invalid Data !"
      }
    }
    try {
          const user = await User.findOne({where: {id: ctx.payload.userID}});
          const mood = await Mood.findOne({id: mood_id});
          if(!user || !mood){
            return {
              status: false,
              message: "Invalid User !"
            }
          }
          const record = new MoodRecord();
          record.mood = mood;
          record.user = user;
          record.date = new Date(); 
      return {
        status: true,
        message: "Mood Record Created Successfuly !"
      }
    }catch(e){
      console.log("Something went wrong while creating mood record : ", e);
      return {
        status: false,
        message: "Something went wrong !"
      }
    }
    
  }
} 
