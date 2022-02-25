import { Arg, Mutation, Resolver } from 'type-graphql';
import { Recipe } from '../../entity/Recipe/Recipe'; 

@Resolver()
export class DeleteRecipeResolver {

  @Mutation(() => Boolean)
  async deleterecipe(@Arg('id') id : string) : Promise<boolean>{

    const recipe = await Recipe.findOne({where: {id: id}});
    if(!recipe){
      return false;
    }
    await recipe.remove();
    return true;
  }

} 
