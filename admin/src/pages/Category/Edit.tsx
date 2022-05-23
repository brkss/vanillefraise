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
  useCategoryDetailsQuery,
  useUpdateCategoryMutation,
} from "../../generated/graphql";
import { Loading } from "../../components";

interface Props {
  onClose: () => void;
  isOpen: boolean;
  cid: string;
}

export const EditRecipeCategory: React.FC<Props> = ({
  onClose,
  isOpen,
  cid,
}) => {
  const [categoryData, setCategoryData] = React.useState({
    icon: "",
    name: "",
    id: cid,
  });
  const { loading, data, error } = useCategoryDetailsQuery({
    variables: {
      cid: cid,
    },
    onCompleted: (res) => {
      setCategoryData({
        icon: res.categoryDetails?.icon || "?",
        id: res.categoryDetails?.id || cid,
        name: res.categoryDetails?.name || "?",
      });
    },
  });
  const [update] = useUpdateCategoryMutation();

  const handleUpdateCategory = () => {
    if (!categoryData.id || !categoryData.name || !categoryData.icon) return; // trigger error !
    update({
      variables: {
        id: categoryData.id,
        name: categoryData.name,
        icon: categoryData.icon,
        active: true,
      },
      update: (store, { data }) => {
        if (!data || !data.updateCategory.status) return;
        const categories = store.readQuery<AdminCategoriesQuery>({
          query: AdminCategoriesDocument,
        })!.adminCategories;
        const index = categories.findIndex((x) => x.category.id === cid);
        if (index >= 0) {
          categories[index].category.name = data.updateCategory.category!.name;
          categories[index].category.icon = data.updateCategory.category!.icon;
        }
        store.writeQuery<AdminCategoriesQuery>({
          query: AdminCategoriesDocument,
          data: {
            adminCategories: [...categories],
          },
        });
      },
    }).then((res) => {
      if (res.data?.updateCategory.status === true) {
        onClose();
      }
    });
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCategoryData({
      ...categoryData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  if (loading || error || !data?.categoryDetails) {
    return <Loading />;
  }

  return (
    <>
      <Drawer size={"lg"} isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Edit Category</DrawerHeader>

          <DrawerBody>
            <Center h={"100%"}>
              <Box>
                <Input
                  _focus={{ outline: "none" }}
                  value={categoryData.icon}
                  border={"none"}
                  fontSize={"70px"}
                  h={"auto"}
                  placeholder={"😋"}
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
          </DrawerBody>

          <DrawerFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={() => handleUpdateCategory()}>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
