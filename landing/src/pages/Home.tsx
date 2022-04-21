import React from "react";
import { Box, Center, GridItem, Grid, Heading } from "@chakra-ui/react";
import { Intro, Subscribe } from "../components";

export const Home: React.FC = () => {
  return (
    <Box>
      <Grid templateColumns="repeat(6, 1fr)">
        <GridItem colSpan={{md: 3, base: 6}}>
          <Center h={"100vh"} bg={"#fef4f9"}>
            <Heading
              fontSize={"90px"}
              fontWeight={"bold"}
              opacity={0.8}
              fontFamily={"'Bebas Neue', cursive"}
            >
              Refashion <br />
              Healthcare <br />
              and <br />
              Nutrition.
            </Heading>
          </Center>
        </GridItem>
        <GridItem colSpan={{base: 6, md: 3}}>
          <Subscribe />
        </GridItem>
      </Grid>
      {/*
      <TopBar />
      <Slide />
      <About />
      <Footer />
      */}
    </Box>
  );
};
