import React from "react";
import {
  Box,
  GridItem,
  Grid,
  Heading,
  Center,
  Button,
  Text,
  Input,
} from "@chakra-ui/react";

export const CreateRecipe: React.FC = () => {
  return (
    <Box h={"100vh"}>
      <Grid templateColumns="repeat(6, 1fr)" h={"100%"}>
        <GridItem p={"20px"} colSpan={3} bg={"gray.50"} height={"100%"}>
          <Heading> Create Recipe </Heading>
          <Center w={"80%"} h={"70%"}>
            <Box w={"100%"} m={"auto"} textAlign={'center'}>
              <Input
                w={"100%"}
                m={"auto"}
                size={"lg"}
                placeholder={"URL"}
                variant={"filled"}
              />
            </Box>
          </Center>
        </GridItem>
      </Grid>
    </Box>
  );
};
