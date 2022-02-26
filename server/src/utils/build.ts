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
      RecordListResolver
    ],
    validate: false,
  });
} ;
