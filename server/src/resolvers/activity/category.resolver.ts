import { Resolver, Mutation, Query } from "type-graphql";
import { ActivityCategory } from "../../entity/Activity";
import { data } from "../../utils/data";

@Resolver()
export class ActivityCategoryResolver {
  @Mutation(() => Boolean)
  async seedActivityCategories(): Promise<boolean> {
    const categories = await ActivityCategory.find();
    if (categories.length == 0) {
      for (let cat of data) {
        const category = new ActivityCategory();
        category.name = cat.name;
        category.icon = cat.icon.toString();
        await category.save();
      }
      return true;
    }
    return false;
  }

  @Query(() => [ActivityCategory])
  async activityCategories() {
    return await ActivityCategory.find();
  }
}
