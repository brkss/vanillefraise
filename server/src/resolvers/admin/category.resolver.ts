import { Resolver, Query, Arg, Mutation, UseMiddleware } from "type-graphql";
import { isAdminAuth } from "../../utils/middlewares/admin.mw";
import { RecipeCategory } from "../../entity/Recipe/Category";
import { AdminCategoryResponse, DefaultResponse } from "../../utils/responses";
import { UpdateCategoryInput } from "../../utils/inputs";
import { UpdateCategoryResponse } from "../../utils/responses";
import { CreateRecipeCategoryResponse } from "../../utils/responses/recipes";
import { CreateRecipeCategoryInput } from "../../utils/inputs/recipes";

@Resolver()
export class AdminRecipeCategoryResolver {
  @UseMiddleware(isAdminAuth)
  @Query(() => [AdminCategoryResponse])
  async adminCategories(): Promise<AdminCategoryResponse[]> {
    const categories = await RecipeCategory.find({
      relations: ["recipes"],
    });
    let data: AdminCategoryResponse[] = [];
    for (let c of categories) {
      const obj: AdminCategoryResponse = {
        category: c,
        count: c.recipes.length,
      };
      data.push(obj);
    }
    return data;
  }

  @UseMiddleware(isAdminAuth)
  @Query(() => RecipeCategory, { nullable: true })
  async categoryDetails(
    @Arg("cid") cid: string
  ): Promise<RecipeCategory | null> {
    if (!cid) return null;
    const category = await RecipeCategory.findOne({ where: { id: cid } });
    if (!category) return null;
    return category;
  }

  // update catergory !
  @UseMiddleware(isAdminAuth)
  @Mutation(() => UpdateCategoryResponse)
  async updateCategory(
    @Arg("data") data: UpdateCategoryInput
  ): Promise<UpdateCategoryResponse> {
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
      category: category,
    };
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
        category: category,
      };
    } catch (e) {
      console.log("Something went wrong : ", e);
      return {
        status: false,
        message: "Something went wrong !",
      };
    }
  }

  @UseMiddleware(isAdminAuth)
  @Mutation(() => DefaultResponse)
  async deleteCategory(
    @Arg("cat_id") cat_id: string
  ): Promise<DefaultResponse> {
    if (!cat_id) {
      return {
        status: false,
        message: "Invalid Data !",
      };
    }
    try {
      const category = await RecipeCategory.findOne({ where: { id: cat_id } });
      if (!category) {
        return {
          status: false,
          message: "Invalid Category !",
        };
      }
      await category.remove();
      return {
        status: true,
        message: "Category Deleted Successufly !",
      };
    } catch (e) {
      console.log("Something went wrong : ", e);
      return {
        status: false,
        message: "Something went wrong",
      };
    }
  }
}
