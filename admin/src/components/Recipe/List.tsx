import React from "react";
import { Box, Heading, Spinner, Center } from "@chakra-ui/react";
import { ListItem } from "./ListItem";
import { useRecipesQuery } from "../../generated/graphql";

export const RecipeList: React.FC = () => {
  const { data, loading, error } = useRecipesQuery();

  if (loading || error) {
    return (
      <Center h={"100vh"}>
        <Spinner />
      </Center>
    );
  }

  return (
    <Box h={"100vh"} overflowY={"scroll"} p={"20px"}>
      <Heading mb={"20px"}>Recipes</Heading>
      <Box>
        {data?.recipes.map((recipe, key) => (
          <ListItem
            key={key}
            title={recipe.name}
            description={recipe.description}
          />
        ))}
      </Box>
    </Box>
  );
};
