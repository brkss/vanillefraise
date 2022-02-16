import { buildSchema } from "type-graphql";
import {
  UserResolver,
  SecurityResolver,
  CreateRecipeResolver,
} from "../resolvers";

export const build = async () => {
  return await buildSchema({
    resolvers: [UserResolver, SecurityResolver, CreateRecipeResolver],
    validate: false,
  });
};
