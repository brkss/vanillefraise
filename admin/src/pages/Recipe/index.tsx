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
import { RecipeCategories, RecipePreview } from "../../components";
import { useRecipeCategoriesQuery } from "../../generated/graphql";
import { useCreateRecipeMutation } from '../../generated/graphql';

export const CreateRecipe: React.FC = () => {
  const { data, loading, error } = useRecipeCategoriesQuery();
  const [categories, SetCategories] = React.useState<string[]>([]);
  const [url, setUrl] = React.useState("");
  const [create] = useCreateRecipeMutation();

  const handleSelecting = (cats: string[]) => {
    SetCategories(cats);
    console.log(`selected : ${cats} \n length : ${cats.length}`);
  };

  const handleRecipeCreating = () => {
    create({
      variables: {
        url: url,
        categories: categories
      }
    }) 
  }

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
        <GridItem
          p={"20px"}
          borderRight={"1px solid #00000059"}
          colSpan={3}
          height={"100%"}
        >
          <Center h={"100%"}>
            <Box w={"80%"} m={"auto"} textAlign={"center"}>
              <Heading textAlign={"left"} mb={"20px"} fontSize={"30px"}>
                {" "}
                Create Recipe{" "}
              </Heading>
              <Input
                w={"100%"}
                m={"auto"}
                size={"lg"}
                placeholder={"URL"}
                variant={"filled"}
                onChange={(e) => setUrl(e.currentTarget.value)}
              />
              <RecipeCategories
                onSelect={(cats) => handleSelecting(cats)}
                categories={data!.recipeCategories as any}
              />
              <Button d={"block"} mt={"20px"} mr={"auto"} onClick={() => {}}>
                Create
              </Button>
            </Box>
          </Center>
        </GridItem>
        <GridItem colSpan={3}>
          <RecipePreview url={url} />
        </GridItem>
      </Grid>
    </Box>
  );
};
