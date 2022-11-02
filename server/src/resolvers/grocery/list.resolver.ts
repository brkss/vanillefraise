import { Resolver, Query, UseMiddleware} from 'type-graphql';
import { Meal } from '../../entity/Meals'
import { Ingredient } from '../../entity/Recipe/Ingredient';
import { isUserAuth } from '../../utils/middlewares/auth.mw';
import { GroceryListResponse } from '../../utils/responses/grocery';

@Resolver()
export class GroceryResolver {

  @UseMiddleware()
  @Query(() => [GroceryListResponse])
  async grocery() : Promise<GroceryListResponse[]> {
  
    const ingredients = []

    return [];
  }


}
