import React from "react";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";

interface ICategory {
  id: string;
  name: string;
  icon: string;
}

interface Props {
  categories: ICategory[];
  onSelect: (cats: string[]) => void;
}

export const RecipeCategories: React.FC<Props> = ({ categories, onSelect }) => {
  const [selected, SetSelected] = React.useState<string[]>([]);
  const handleSelecting = (id: string) => {
    const index = selected.findIndex((x) => x === id);
    if (index !== -1) {
      selected.splice(index, 1);
      SetSelected([...selected])
    } else {
      SetSelected([...selected, id]);
    }
    onSelect(selected);
  };

  return (
    <Box mt={"20px"}>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {categories.map((category, key) => (
          <GridItem>
            <Box
              cursor={"pointer"}
              onClick={() => handleSelecting(category.id)}
              p={"15px 23px"}
              borderRadius={"13px"}
              bg={selected.indexOf(category.id) === -1 ? "#fbe7d8" : "#f5c983"}
            >
              <Text d={"inline-block"} mr={"10px"}>
                {category.icon}
              </Text>
              <Text fontSize={"14px"} fontWeight={"bold"} d={"inline-block"}>
                {category.name}
              </Text>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};
