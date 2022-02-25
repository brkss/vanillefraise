import React from "react";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";

interface ICategory {
  id: string;
  name: string;
  icon: string;
}

interface Props {
  categories: ICategory[];
  onSelect: (id: string) => void;
  loading: boolean;
  selectedCategories: string[];
}

export const RecipeCategories: React.FC<Props> = ({ categories, onSelect, loading, selectedCategories }) => {
  const [selected, SetSelected] = React.useState<string[]>([...selectedCategories]);
  const handleSelecting = (id: string) => {
    if(!loading){
      onSelect(id);
    }
    //const index = selected.findIndex((x) => x === id);
    //let cs = [];
    /*
    if (index !== -1 && !loading) {
      selected.splice(index, 1);
      cs = selected;
      SetSelected([...cs])
      onSelect(cs);
    } else if(!loading) {
      cs = [...selected, id];
      SetSelected([...cs]);
      onSelect(cs);
      }
     */
  };
  

  return (
    <Box mt={"20px"}>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {categories.map((category, key) => (
          <GridItem key={key}>
            <Box
              cursor={"pointer"}
              onClick={() => handleSelecting(category.id)}
              p={"15px 23px"}
              borderRadius={"13px"}
              bg={selectedCategories.indexOf(category.id) === -1 ? "#fbe7d8" : "#f5c983"}
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
