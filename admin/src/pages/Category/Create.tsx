import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  Box,
  Center,
} from "@chakra-ui/react";
import {
  AdminCategoriesDocument,
  AdminCategoriesQuery,
  useCreateRecipeCategoryMutation,
} from "../../generated/graphql";
import { Loading } from "../../components";

interface Props {
  onClose: () => void;
  isOpen: boolean;
}

export const CreateRecipeCategory: React.FC<Props> = ({ onClose, isOpen }) => {
  const [create] = useCreateRecipeCategoryMutation();
  const [loading, SetLoading] = React.useState(false);
  const [categoryData, setCategoryData] = React.useState({
    icon: "",
    name: "",
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCategoryData({
      ...categoryData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const handleCreateCategory = () => {
    if (loading || !categoryData.icon || !categoryData.name) {
      return; // trigger error !
    }
    SetLoading(true);
    create({
      variables: {
        name: categoryData.name,
        icon: categoryData.icon,
      },
      update: (store, { data }) => {
        if (
          !data ||
          !data.createRecipeCategory.status ||
          !data.createRecipeCategory.category
        )
          return;
        const categories =
          store.readQuery<AdminCategoriesQuery>({
            query: AdminCategoriesDocument,
          })?.adminCategories || [];
        categories.unshift({category: data.createRecipeCategory.category, count: 0 });
        store.writeQuery<AdminCategoriesQuery>({
          query: AdminCategoriesDocument,
          data: {
            adminCategories: [...categories],

          },
        });
      },
    }).then((res) => {
      if (!res.errors && res.data?.createRecipeCategory.status) {
        SetLoading(false);
        onClose();
      }
    });
    //console.log("cat : ", categoryData);
  };

  return (
    <>
      <Drawer size={"lg"} isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create Category</DrawerHeader>
          <DrawerBody>
            {loading ? (
              <Loading />
            ) : (
              <Center h={"100%"}>
                <Box>
                  <Input
                    _focus={{ outline: "none" }}
                    value={categoryData.icon}
                    border={"none"}
                    fontSize={"70px"}
                    h={"auto"}
                    placeholder={"?"}
                    textAlign={"center"}
                    id={"icon"}
                    onChange={(e) => handleChange(e)}
                  />
                  <Input
                    _focus={{ outline: "none" }}
                    textAlign={"center"}
                    p={"30px"}
                    value={categoryData.name}
                    placeholder={"NAME"}
                    fontWeight={"bold"}
                    border={"none"}
                    //variant={"filled"}
                    fontSize={"30px"}
                    id={"name"}
                    onChange={(e) => handleChange(e)}
                  />
                </Box>
              </Center>
            )}
          </DrawerBody>
          <DrawerFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={() => handleCreateCategory()}>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
