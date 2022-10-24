import { Resolver, Mutation, UseMiddleware, Arg, Ctx } from "type-graphql";
import { isUserAuth } from "../../utils/middlewares/auth.mw";
import { IContext } from "../../utils/types/Context";
    if(!recipe_id) return false;
@Resolver()
export class ReportRecipeResolver {
  @UseMiddleware(isUserAuth)
  @Mutation(() => Boolean)
  async reportRecipe(
    @Arg("recipe_id") recipe_id: string,
    @Ctx() ctx: IContext
  ): Promise<boolean> {
    if (!recipe_id) return false;
    
    const user = await User.findOne({where: {id: ctx.payload.userId}});
    if(!user) return false;



    return true;
  }
}
