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
  GridItem,
  Grid,
  Input
} from "@chakra-ui/react";
import {
  AdminCategoriesDocument,
  AdminCategoriesQuery,
  useAdminCategoriesQuery,
  useDeleteCategoryMutation,
} from "../../generated/graphql";
import { EditRecipeCategory } from "./Edit";
import { Loading } from "../../components";
import { CreateRecipeCategory } from "./Create";

export const RecipeCategory: React.FC = () => {
  const { loading, data, error } = useAdminCategoriesQuery();
  const [cid, setCid] = React.useState("");
  const _create = useDisclosure();
  const [remove] = useDeleteCategoryMutation();

  const { onOpen, onClose, isOpen } = useDisclosure();

  if (loading || error) {
    return <Loading />;
  }

  const handleDeleteCategory = (id: string) => {
    if (!id) return;
    remove({
      variables: {
        cat_id: id,
      },
      update: (store, { data }) => {
        if (!data || !data.deleteCategory.status) return;
        const categories = store.readQuery<AdminCategoriesQuery>({
          query: AdminCategoriesDocument,
        })!.adminCategories;
        const index = categories.findIndex((x) => x.category.id === id);
        if (index > -1) {
          categories.splice(index, 1);
        }
        store.writeQuery<AdminCategoriesQuery>({
          query: AdminCategoriesDocument,
          data: {
            adminCategories: [...categories],
          },
        });
      },
    });
  };

  const handleEditCategory = (id: string) => {
    setCid(id);
    onOpen();
  };

  return (
    <Box p={"30px"} minH={"100vh"}>
      <Grid templateColumns="repeat(6, 1fr)">
        <GridItem colSpan={3}>
          <Heading mb={10}>Categories</Heading>
        </GridItem>
        <GridItem textAlign={"right"} colSpan={3}>
          <Button onClick={() => _create.onOpen()}>Create</Button>
        </GridItem>
      </Grid>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Icon</Th>
              <Th>Status</Th>
              <Th isNumeric>Recipes Related</Th>
              <Th isNumeric>Index</Th>
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
                  {cat.category.index}
                  </Td>
                <Td isNumeric>
                  <Button onClick={() => handleEditCategory(cat.category.id)}>
                    EDIT
                  </Button>
                  <Button
                    ml={"10px"}
                    onClick={() => handleDeleteCategory(cat.category.id)}
                  >
                    DELETE
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <CreateRecipeCategory isOpen={_create.isOpen} onClose={_create.onClose} />
      <EditRecipeCategory cid={cid} isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};
