import React from "react";
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  useDisclosure,
  Switch,
  Button,
} from "@chakra-ui/react";
import {
  AdminRecipesDocument,
  AdminRecipesQuery,
  useAdminRecipesQuery,
  useChangeRecipeVisibilityMutation,
} from "../../generated/graphql";
import { Loading } from "../../components";

export const RecipeList: React.FC = () => {
  const { loading, error, data } = useAdminRecipesQuery();
  const [vis] = useChangeRecipeVisibilityMutation();

  const handleRecipeVisibility = (rid: string) => {
    if (!rid) return; // trigger error !
    vis({
      variables: {
        rid: rid,
      },
      update: (store, { data }) => {
        if (!data || !data.changeRecipeVisibility.status) return;
        const recipes = store.readQuery<AdminRecipesQuery>({
          query: AdminRecipesDocument,
        })!.adminRecipes;
        const index = recipes.findIndex((x) => x.recipe.id === rid);
        if (index >= 0) {
          recipes[index].recipe.public = !recipes[index].recipe.public;
        }
        store.writeQuery<AdminRecipesQuery>({
          query: AdminRecipesDocument,
          data: {
            adminRecipes: [...recipes],
          },
        });
      },
    });
  };

  if (loading || error || !data) return <Loading />;

  return (
    <Box minH={"100vh"} p={"30px"}>
      <Heading mb={10}>Recipes</Heading>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Total time</Th>
              <Th>Description</Th>
              <Th isNumeric>Serving</Th>
              <Th isNumeric>Visibility</Th>
              <Th isNumeric>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.adminRecipes.map((d, key) => (
              <Tr key={key}>
                <Td fontWeight={"bold"}>{d.recipe.name}</Td>
                <Td fontWeight={"bold"}>{d.recipe.total || "__"} </Td>
                <Td fontWeight={"bold"}>
                  {d.recipe.description?.slice(0, 10)}
                </Td>
                <Td fontWeight={"bold"} isNumeric>
                  {d.recipe.serving || "?"}
                </Td>
                <Td isNumeric>
                  <Switch
                    onChange={() => handleRecipeVisibility(d.recipe.id)}
                    isChecked={d.recipe.public}
                    id="status"
                  />
                </Td>
                <Td isNumeric>
                  <Button onClick={() => {}}>EDIT</Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};
