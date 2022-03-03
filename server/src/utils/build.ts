import { buildSchema } from "type-graphql";
import {
  UserResolver,
  SecurityResolver,
  CreateRecipeResolver,
  ActivityCategoryResolver,
  RecipesListResolver,
  RecipeCategoryResolver,
  SpecialConditionResolver,
  DeleteRecipeResolver,
  RecipeItemResolver,
  RecordCategoryResolver,
  CreateRecordResolver,
  RecordListResolver,
  MoodResolver,
  UserInfoResolver,
  NutritionGuideResolver,
  RecipeNutritionResolver,
} from "../resolvers";

export const build = async () => {
  return await buildSchema({
    resolvers: [
      UserResolver,
      SecurityResolver,
      CreateRecipeResolver,
      ActivityCategoryResolver,
      RecipesListResolver,
      RecipeCategoryResolver,
      SpecialConditionResolver,
      DeleteRecipeResolver,
      RecipeItemResolver,
      RecordCategoryResolver,
      CreateRecordResolver,
      RecordListResolver,
      MoodResolver,
      UserInfoResolver,
      NutritionGuideResolver,
      RecipeNutritionResolver
    ],
    validate: false,
  });
} ;
