import { Resolver, Mutation, } from 'type-graphql';
import { getData } from '../../utils/data/activity/calories.data';
import { ActivityCalories, ActivityCategory } from '../../entity/Activity';

@Resolver()
export class ActivityCaloriesResolver {

  @Mutation(() => Boolean)
  async seedActivityCalories(){

    const acalories = await ActivityCalories.find();
    if(acalories.length == 0){
      const categories = await ActivityCategory.find();
      const data = getData(categories);
      for(let d of data){
        const cat_index = categories.findIndex(x => x.id === d.category);
        if(cat_index != -1){
          const ac = new ActivityCalories();
          ac.category = categories[cat_index];
          ac.name = d.name;
          ac.zone = d.zone;
          ac.val = d.val;
          await ac.save();
        }
      }
      return true;
    }
    return false;
    

  } 

}
