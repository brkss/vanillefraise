import React from "react";
import { Box, Center, GridItem, Grid, Heading } from "@chakra-ui/react";
import { TopBar, Intro, Subscribe, Footer, About } from "../components";

export const Home: React.FC = () => {
  return (
    <Box>
      <TopBar />
      <Intro />
      <About />
      <Grid templateColumns="repeat(6, 1fr)">
        <GridItem colSpan={{ md: 3, base: 6 }}>
          <Center
            h={"100vh"}
            style={{
              background:
                "linear-gradient(180deg, rgba(251,248,248,1) 0%, rgba(254,208,208,1) 100%)",
            }}
            bg={"#fef4f9"}
          >
            <Heading
              fontSize={{ md: "90px", base: "70px" }}
              lineHeight={{ md: "90px", base: "70px" }}
              fontWeight={"bold"}
              opacity={0.8}
              fontFamily={"'Bebas Neue', cursive"}
              letterSpacing={"-1px"}
            >
              Because
              <br />
              Nutrition
              <br />
              Is
              <br />
              Influential.
              <br />
            </Heading>
          </Center>
        </GridItem>
        <GridItem colSpan={{ base: 6, md: 3 }}>
          <Subscribe />
        </GridItem>
      </Grid>
      <Footer />
      {/*
      <TopBar />
      <Slide />
      <About />
      */}
    </Box>
  );
};
