import React from "react";
import { Box, Grid, GridItem, Text, Image, Center } from "@chakra-ui/react";
const screenshot = require("../assets/ss.png");

export const About: React.FC = () => {
  return (
    <Box h={"100vh"}>
      <Grid templateColumns={"repeat(6, 1fr)"}>
        <GridItem h={"100vh"} colSpan={{ md: 3, base: 6 }}>
          <Center h={"100%"}>
            <Box>
              <Text
                color={"#434343"}
                lineHeight={"30px"}
                fontSize={"30px"}
                fontWeight={"bold"}
                fontFamily={"'DM Serif Display',serif;"}
              >
                Your Appetite, <br />
                Your way !
              </Text>
            </Box>
          </Center>
        </GridItem>
        <GridItem h={"100vh"} pos={"relative"} colSpan={{ md: 3, base: 6 }}>
          <Image
            w={"300px"}
            top={"50%"}
            left={"50%"}
            pos={"absolute"}
            transform={"translate(-50%, -50%)"}
            src={screenshot}
          />
        </GridItem>
      </Grid>
    </Box>
  );
};
