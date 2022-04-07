import React from "react";
import { Box, Heading, Spinner, Center } from "@chakra-ui/react";
import { ListItem } from "./ListItem";
import {
  useRecipesQuery,
  useDeleteRecipeMutation,
  RecipesQuery,
  RecipesDocument,
} from "../../generated/graphql";

export const RecipeList: React.FC = () => {
  const { data, loading, error } = useRecipesQuery();
  const [del] = useDeleteRecipeMutation();

  if (loading || error) {
    return (
      <Center h={"100vh"}>
        <Spinner />
      </Center>
    );
  }

  const handleDelete = (id: string) => {
    del({
      variables: { id: id },
      update: (store, { data }) => {
        if (!data || !data.deleterecipe) {
          return null;
        }
        const recipes = store.readQuery<RecipesQuery>({
          query: RecipesDocument,
        })!.recipes;
        const index = recipes.findIndex((x) => x.id === id);
        console.log("recipe index L: ", index);
        console.log("recipes : ", recipes);
        if (index === -1) {
          return null;
        }
        const results = [...recipes];
        results.splice(index, 1);
        console.log("UPDATE DA SHIT");
        store.writeQuery<RecipesQuery>({
          query: RecipesDocument,
          data: {
            recipes: [...results],
          },
        });
      },
    });
  };

  return (
    <Box h={"100vh"} overflowY={"scroll"} p={"20px"}>
      <Heading mb={"20px"}>Recipes</Heading>
      <Box>
        {data?.recipes.map((recipe, key) => (
          <ListItem
            key={key}
            title={recipe.name}
            description={recipe.description}
            image={recipe.image}
            supress={() => handleDelete(recipe.id)}
          />
        ))}
      </Box>
    </Box>
  );
};
