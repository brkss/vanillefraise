import { Resolver, Field, Mutation } from "type-graphql";
import { NutritienCategory, Nutrition } from "../../entity/Nutrition";

const tmp = [
  {
    name: "Mineral",
    nutrients: [
      "K",
      "P",
      "ZN",
      "CA",
      "RIBF",
      "FOLAC",
      "NA",
      "MG",
      "FE",
      "CA",
      "",
    ],
  },
  {
    name: "Vitamins",
    nutrients: [
      "TOCPHA",
      "THIA",
      "VITD",
      "FOLFD",
      "FOLDFE",
      "VITC",
      "VITB12",
      "VITA_RAE",
      "NIA",
      "VITB6A",
      "VITK1",
    ],
  },
  {
    name: "Protein",
    nutrients: ["PROCNT"],
  },
  {
    name: "Energy",
    nutrients: ["ENERC_KCAL"],
  },
  {
    name: "Fats",
    nutrients: ["FAPU", "CHOLE", "FAT", "FAMS", "FASAT", "FATRN"],
  },
  {
    name: "Water",
    nutrients: ["WATER"],
  },
  {
    name: "Carbohydrates",
    nutrients: [
      "SUGAR.added",
      "SUGAR",
      "CHOCDF",
      "Sugar.alcohol",
      "FIBTG",
      "CHOCDF.net",
    ],
  },
];

@Resolver()
export class NutrientCategoryResolver {
  @Mutation(() => Boolean)
  async seedNutrientCategories(): Promise<boolean> {
    const categories = await NutritienCategory.find();
    if (categories.length > 0) return false;
    for (let cat of tmp) {
      const category = new NutritienCategory();
      category.name = cat.name;
      await category.save();
      for (let n of cat.nutrients) {
        const nutritien = await Nutrition.findOne({ where: { code: n } });
        if (!nutritien) continue;
        nutritien.category = category;
        await nutritien.save();
      }
    }
    return true;
  }
}
