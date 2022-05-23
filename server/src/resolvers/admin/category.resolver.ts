import { Resolver, Query, UseMiddleware } from "type-graphql";
import { isAdminAuth } from "../../utils/middlewares/admin.mw";
import { RecipeCategory } from "../../entity/Recipe/Category";
import { AdminCategoryResponse } from "../../utils/responses";

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
}
