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
    ],
    validate: false,
  });
} ;
