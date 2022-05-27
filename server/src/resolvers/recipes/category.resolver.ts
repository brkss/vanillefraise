import { Resolver, Mutation, Query, UseMiddleware, Arg } from "type-graphql";
import { RecipeCategory } from "../../entity/Recipe";
import { recipe_categories } from "../../utils/data/recipe_categories";
import { isAdminAuth } from "../../utils/middlewares";
import { CreateRecipeCategoryInput } from "../../utils/inputs/recipes";
import { CreateRecipeCategoryResponse } from "../../utils/responses/recipes";

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

  @UseMiddleware(isAdminAuth)
  @Mutation(() => CreateRecipeCategoryResponse)
  async createRecipeCategory(
    @Arg("data") data: CreateRecipeCategoryInput
  ): Promise<CreateRecipeCategoryResponse> {
    if (!data.name || !data.icon) {
      return {
        status: false,
        message: "Invalid Data !",
      };
    }
    try {
      const category = new RecipeCategory();
      category.name = data.name;
      category.icon = data.icon;
      await category.save();
      return {
    status: true,
    message: "Category Created Successfuly !",
    category: category
      }
    } catch (e) {
      console.log("Something went wrong : ", e);
      return {
        status: false,
        message: "Something went wrong !",
      };
    }

  }
}
