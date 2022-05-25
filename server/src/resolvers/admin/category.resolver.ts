import { Resolver, Query, UseMiddleware, Arg, Mutation,  } from "type-graphql";
import { isAdminAuth } from "../../utils/middlewares/admin.mw";
import { RecipeCategory } from "../../entity/Recipe/Category";
import { AdminCategoryResponse } from "../../utils/responses";
import { UpdateCategoryInput } from "../../utils/inputs";
import { UpdateCategoryResponse } from '../../utils/responses';

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
  @Query(() => RecipeCategory, {nullable: true})
  async categoryDetails(@Arg('cid') cid: string) : Promise<RecipeCategory | null> {
    if(!cid) return null;
    const category = await RecipeCategory.findOne({where: {id: cid}});
    if(!category) return null;
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
      category: category
    };
  }


}
