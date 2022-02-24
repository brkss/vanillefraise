import React from "react";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";

interface ICategory {
  name: string;
  icon: string;
}

interface Props {
  categories: ICategory[];
}

export const RecipeCategories: React.FC<Props> = ({ categories }) => {
  return (
    <Box mt={"20px"}>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {categories.map((category, key) => (
          <GridItem>
            <Box cursor={'pointer'} p={"15px 23px"} borderRadius={"13px"} bg="#fbe7d8">
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
