import { DefaultResponse } from "../../utils/responses";
import { Resolver, Mutation, Query, Arg, UseMiddleware } from "type-graphql";
import { RecipeCategory } from "../../entity/Recipe";
import { recipe_categories } from "../../utils/data/recipe_categories";
import { UpdateCategoryInput } from "../../utils/inputs";
import { isAdminAuth } from "../../utils/middlewares/admin.mw";

@Resolver()
export class RecipeCategoryResolver {
  @Query(() => [RecipeCategory])
  async recipeCategories(): Promise<RecipeCategory[]> {
    return await RecipeCategory.find({
      where: { active: true },
      relations: ["recipes"],
    });
  }

  @Mutation(() => Boolean)
  async seedRecipeCategories(): Promise<boolean> {
    const categories = await RecipeCategory.find();
    if (categories.length == 0) {
      for (let c of recipe_categories) {
        const category = new RecipeCategory();
        category.name = c.name;
        category.icon = c.icon;
        await category.save();
      }
      return true;
    }
    return false;
  }

  // update catergory !
  @UseMiddleware(isAdminAuth)
  @Mutation(() => DefaultResponse)
  async updateCategory(
    @Arg("data") data: UpdateCategoryInput
  ): Promise<DefaultResponse> {
    if (!data || !data.id)
      return {
        status: false,
        message: "Invalid Data !",
      };
    const category = await RecipeCategory.findOne({ where: { id: data.id } });
    if (!category) {
      return {
        status: false,
        message: "category not found !",
      };
    }
    category.name = data.name || category.name;
    category.icon = data.icon || category.icon;
    category.active = data.active;
    await category.save();

    return {
      status: true,
      message: "Category updated successfuly !",
    };
  }
}
