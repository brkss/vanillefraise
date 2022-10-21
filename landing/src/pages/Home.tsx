import React from "react";
import { Box, Center, GridItem, Grid, Heading } from "@chakra-ui/react";
import {
  TopBar,
  Intro,
  Subscribe,
  Footer,
  About,
  Info,
  InfoSection,
} from "../components";
import { data } from "../utils/data/infos";

export const Home: React.FC = () => {
  return (
    <Box>
      <TopBar />
      <Intro />
      {data.map((item, key) => (
        <InfoSection text={item.text} image={item.image} title={item.title} />
      ))}
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
              fontFamily={"'Bebas Neue', cursive"}
              letterSpacing={"-1px"}
              transform={"translateX(12px)"}
              background={"-webkit-linear-gradient(#ffdada, #ff8d8d)"}
              backgroundClip={"text"}
              style={{ WebkitTextFillColor: "transparent" }}
              zIndex={999}
            >
              Because
              <br />
              You Deserve
              <br />
              A Healthy
              <br />
              Life.
              <br />
            </Heading>
          </Center>
        </GridItem>
        <GridItem colSpan={{ base: 6, md: 3 }}>
          <Subscribe />
        </GridItem>
      </Grid>
      <Footer />
    </Box>
  );
};
