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
import { RecipeCategories, RecipeList } from "../../components";
import { useRecipeCategoriesQuery, useCreateRecipeMutation, RecipesQuery,RecipesDocument } from "../../generated/graphql";

export const CreateRecipe: React.FC = () => {
  const { data, loading, error } = useRecipeCategoriesQuery();
  const [err, setErr] = React.useState("");
  const [categories, SetCategories] = React.useState<string[]>([]);
  const [url, setUrl] = React.useState("");
  const [create] = useCreateRecipeMutation();
  const [_loading, SetLoading] = React.useState(false);

  const handleSelecting = (id: string) => {
    const index = categories.findIndex((x) => x === id);
    //let cs = [];
    if (index !== -1 && !_loading) {
      categories.splice(index, 1);
      SetCategories([...categories]);
    } else if (!_loading) {
      SetCategories([...categories, id]);
    }
  };

  const handleRecipeCreating = () => {
    SetLoading(true);
    create({
      variables: {
        url: url,
        categories: categories,
      },
      update: (store, { data }) => {
        if (!data || !data.createRecipe.recipe) {
          return null;
        }
        const oldRecipes = store.readQuery<RecipesQuery>({
          query: RecipesDocument,
        })?.recipes;
        const newRecipe = data.createRecipe.recipe;
        console.log("UPDATE DA SHIT");
        store.writeQuery<RecipesQuery>({
          query: RecipesDocument,
          data: {
            recipes: [newRecipe!, ...oldRecipes!],
          },
        });
      },
    })
      .then((res) => {
        SetLoading(false);
        if (res.errors || !res.data || !res.data.createRecipe.status) {
          setErr(res.data?.createRecipe.message || "Something went wrong !");
        }
        setUrl("");
        SetCategories([]);
        console.log("Create recipe response => ", res);
      })
      .catch((e) => {
        console.log("Something went wrong : ", e);
      });
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
                value={url}
                disabled={_loading}
              />
              <RecipeCategories
                selectedCategories={categories}
                loading={_loading}
                onSelect={(cats) => handleSelecting(cats)}
                categories={data!.recipeCategories as any}
              />
              <Button
                d={"block"}
                mt={"20px"}
                mr={"auto"}
                onClick={() => handleRecipeCreating()}
                loadingText={"Creating..."}
                isLoading={_loading}
              >
                Create
              </Button>
            </Box>
          </Center>
        </GridItem>
        <GridItem colSpan={3}>
          <RecipeList />
        </GridItem>
      </Grid>
    </Box>
  );
};
