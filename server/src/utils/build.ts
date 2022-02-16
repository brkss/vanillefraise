import { buildSchema } from "type-graphql";
import {
  UserResolver,
  SecurityResolver,
  CreateRecipeResolver,
  ActivityCategoryResolver,
} from "../resolvers";

export const build = async () => {
  return await buildSchema({
    resolvers: [
      UserResolver,
      SecurityResolver,
      CreateRecipeResolver,
      ActivityCategoryResolver,
    ],
    validate: false,
  });
};
