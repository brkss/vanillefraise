import { Resolver, Mutation, Query } from "type-graphql";
import { RecordCategory } from "../../entity/Record";

const categories_data = [
  {
    name: "Crabs",
    icon: "🥗",
    unit: "g",
  },
  {
    name: "Fast Insulin",
    icon: "💉",
    unit: "unit",
  },
  {
    name: "BS",
    icon: "🩸",
    unit: "mg/dl",
  },
  {
    name: "Correction",
    icon: "💉",
    unit: "unit",
  },
  {
    name: "Basal Insulin",
    icon: "💉",
    unit: "unit",
  },
];

@Resolver()
export class RecordCategoryResolver {
  @Mutation(() => Boolean)
  async seedRecordCategories(): Promise<boolean> {
    const categories = await RecordCategory.find();
    if (categories.length == 0) {
      for (let c of categories_data) {
        const category = new RecordCategory();
        category.name = c.name;
        category.icon = c.icon;
        category.unit = c.unit;
        await category.save();
      }
      return true;
    }
    return false;
  }

  @Query(() => [RecordCategory])
  async recordCategories(): Promise<RecordCategory[]> {
    return await RecordCategory.find();
  }
}
