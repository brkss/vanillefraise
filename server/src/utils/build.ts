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
      RecordCategoryResolver
    ],
    validate: false,
  });
} ;
