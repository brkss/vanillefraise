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
import { useAdminRecipesQuery } from "../../generated/graphql";
import { Loading } from "../../components";

export const RecipeList: React.FC = () => {
  const { loading, error, data } = useAdminRecipesQuery();

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
                  <Switch isChecked={d.recipe.public} id="status" />
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
