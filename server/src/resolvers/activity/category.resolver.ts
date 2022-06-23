import { Resolver, Mutation, Query } from "type-graphql";
import { ActivityCategory } from "../../entity/Activity";
import { activity_categories } from "../../utils/data/activity/categories.data";

@Resolver()
export class ActivityCategoryResolver {
  @Mutation(() => Boolean)
  async seedActivityCategories(): Promise<boolean> {
    const categories = await ActivityCategory.find();
    if (activity_categories.length > categories.length) {
      for (let cat of activity_categories) {
        if (!this.categoryExist(cat.name, categories)) {
          const category = new ActivityCategory();
          category.name = cat.name;
          category.highmet = cat.highmet;
          category.lowmet = cat.lowmet;
          category.icon = cat.icon;
          await category.save();
        }
      }
      return true;
    }
    return false;
  }
  /*
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
    } else if (data.length > categories.length) {
      for (let cat of data) {
        if (!this.categoryExist(cat.name, categories)) {
          const category = new ActivityCategory();
          category.name = cat.name;
          category.icon = cat.icon;
          await category.save();
        }
      }
      return true;
    }
    return false;
  }
*/
  private categoryExist(name: string, categories: ActivityCategory[]) {
    for (let c of categories) {
      if (c.name === name) return true;
    }
    return false;
  }

  @Query(() => [ActivityCategory])
  async activityCategories() {
    return await ActivityCategory.find();
  }
}
