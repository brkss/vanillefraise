import React from "react";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";

export const About: React.FC = () => {
  return <Box h={"100vh"}>
    <Grid templateColumns={'repeat(6, 1fr)'}>
      <GridItem colSpan={{md: 3, base: 6}}>
          <Text>Side 1</Text>
      </GridItem>
      <GridItem colSpan={{md: 3, base: 6}}>
          <Text>Side 2</Text>
      </GridItem>
    </Grid>
  </Box>;
};
