import { Resolver, Query, Mutation } from 'type-graphql';
import { Mood } from '../../entity/Mental';

const moods_data = [
  {
    name: "Happy",
    icon: "😄"
  },
  {
    name: "Good",
    icon: "🙃"
  },
  {
    name: "Excited",
    icon: "👏"
  },
  {
    name: "Energetic",
    icon: "💃"
  },
  {
    name: "Calm",
    icon: "🧘‍♀️"
  },
  {
    name: "Tired",
    icon: "😩"
  },
  {
    name: "Stressed",
    icon: "😥"
  },
  {
    name: "Mad",
    icon: "😤"
  },
  {
    name: "Normal",
    icon: "👌"
  },
  {
    name: "Sad",
    icon: "😔"
  }
]

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
} 
