import React from "react";
import { Box, Grid, GridItem, Text, Image, Center } from "@chakra-ui/react";
const screenshot = require("../assets/ss_1.png");

export const Info: React.FC = () => {
  return (
    <Box h={"100vh"}>
      <Grid templateColumns={"repeat(6, 1fr)"}>
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
                Healthy eating, <br />
                Easy !
              </Text>
              <Text textAlign={"justify"} mt={"20px"}>
                Vanille fraise gives you flexible choices with taking
                exceptions, allergies under consideration, variety of recipes to
                suit everyone, Plan and record your meal's everyday nutrition,
                and caloric intake to keep your flexible diet balanced, and
                record your daily activities and burn calories to help you
                maintain a healthy weight.
              </Text>
            </Box>
          </Center>
        </GridItem>
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
      </Grid>
    </Box>
  );
};
