import React from "react";
import {
  Box,
  GridItem,
  Grid,
  Heading,
  Center,
  Button,
  Text,
  Input,
  Spinner,
} from "@chakra-ui/react";
import { RecipeCategories } from "../../components";
import { useRecipeCategoriesQuery } from "../../generated/graphql";

export const CreateRecipe: React.FC = () => {
  const { data, loading, error } = useRecipeCategoriesQuery();
  const [categories, SetCategories] = React.useState<string[]>([]);

  const handleSelecting = (cats: string[]) => {
    SetCategories(cats);
  };

  if (loading || error) {
    return (
      <Center h={"100vh"}>
        <Spinner />
      </Center>
    );
  }

  return (
    <Box h={"100vh"}>
      <Grid templateColumns="repeat(6, 1fr)" h={"100%"}>
        <GridItem p={"20px"} colSpan={3} bg={"gray.50"} height={"100%"}>
          <Heading> Create Recipe </Heading>
          <Center w={"80%"} h={"70%"}>
            <Box w={"100%"} m={"auto"} textAlign={"center"}>
              <Input
                w={"100%"}
                m={"auto"}
                size={"lg"}
                placeholder={"URL"}
                variant={"filled"}
              />
              <RecipeCategories
                onSelect={(cats) => handleSelecting(cats)}
                categories={data!.recipeCategories as any}
              />
            </Box>
          </Center>
        </GridItem>
      </Grid>
    </Box>
  );
};
