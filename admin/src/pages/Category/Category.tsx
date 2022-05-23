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
  Button,
} from "@chakra-ui/react";
import { useAdminCategoriesQuery } from "../../generated/graphql";
import { Loading } from "../../components";
import { EditRecipeCategory } from "./Edit";

export const RecipeCategory: React.FC = () => {
  const { loading, data, error } = useAdminCategoriesQuery();
  const [cid, setCid] = React.useState("");
  const { onOpen, onClose, isOpen } = useDisclosure();

  if (loading || error) {
    return <Loading />;
  }

  const handleEditCategory = (id: string) => {
    setCid(id);
    onOpen();
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
                <Td isNumeric>
                  <Button onClick={() => handleEditCategory(cat.category.id)}>EDIT</Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <EditRecipeCategory cid={cid} isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};
