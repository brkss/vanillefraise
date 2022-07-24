import React from "react";
import { Box, Grid, GridItem, Text, Image, Center } from "@chakra-ui/react";
const screenshot = require("../assets/ss.png");

export const About: React.FC = () => {
  return (
    <Box h={"100vh"}>
      <Grid templateColumns={"repeat(6, 1fr)"}>
        <GridItem
          h={{ md: "100vh", base: "50vh" }}
          pos={"relative"}
          colSpan={{ md: 3, base: 6 }}
        >
          <Center h={"100%"}>
            <Image
              w={{ md: "300px", base: "200px" }}
              //top={"50%"}
              //left={"50%"}
              //pos={"absolute"}
              //transform={"translate(-50%, -50%)"}
              src={screenshot}
            />
          </Center>
        </GridItem>
        <GridItem
          h={{ md: "100vh", base: "50vh" }}
          colSpan={{ md: 3, base: 6 }}
        >
          <Center h={"100%"}>
            <Box w={{ md: "400px", base: "300px" }}>
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
              <Text textAlign={"justify"} mt={"20px"}>
                Take control ! listen to your appetite while choosing recipes to
                cook and planing your meals. eat whatever you like while keeping
                your nutritional balance, use <b>Vanille Fraise🍓</b> to track
                and consume the right amount of calories, macronutrients and
                micronutrients in your day without exceeding your caloric needs.
              </Text>
            </Box>
          </Center>
        </GridItem>
      </Grid>
    </Box>
  );
};
