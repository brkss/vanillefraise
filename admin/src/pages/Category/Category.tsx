import React from "react";
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { useAdminCategoriesQuery } from "../../generated/graphql";
import { Loading } from "../../components";

export const RecipeCategory: React.FC = () => {
  const { loading, data, error } = useAdminCategoriesQuery();

  if (loading || error) {
    return <Loading />;
  }

  return (
    <Box p={"30px"} minH={"100vh"}>
      <Heading mb={10}>Categories</Heading>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Icon</Th>
              <Th>Status</Th>
              <Th isNumeric>Recipes Related</Th>
              <Th isNumeric>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.adminCategories.map((cat, key) => (
              <Tr key={key}>
                <Td fontWeight={"bold"}>{cat.category.name}</Td>
                <Td>{cat.category.icon}</Td>
                <Td>{cat.category.active === true ? "Active" : "Disabled"}</Td>
                <Td isNumeric>{cat.count}</Td>
                <Td isNumeric>EDIT</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};
