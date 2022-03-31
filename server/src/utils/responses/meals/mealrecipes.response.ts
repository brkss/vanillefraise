import { ObjectType, Field } from 'type-graphql';
import { MealRecipes } from '../../../entity/Meals';
import { Ingredient, Recipe } from '../../../entity/Recipe';

@ObjectType()
export class MealRecipeResponse {

  @Field()
  status: boolean;

  @Field({nullable: true})
  message?: string;

  @Field(() => [Recipe], {nullable: true})
  recipes?: Recipe[]; 

  @Field(() => [Ingredient], {nullable: true})
  ingredients?: Ingredient[];

  @Field(() => [MealRecipes] ,{nullable: true})
  mealrecipes?: MealRecipes[];

} 
