import React from "react";
import { Box, Text, Grid, GridItem, Center } from "@chakra-ui/react";
import { Instruction } from "./Instruction";
import Sparkles from "./Sparkles";

export const Results: React.FC = () => {
  return (
    <Box p={"10px"}>
      <Text textAlign={"center"} fontSize={"50px"}>
        <Sparkles>🌞 🍃</Sparkles>
      </Text>
      <Box>
        <Text fontSize={"25px"} fontWeight={"bold"} display={"inline"}>
          <Sparkles>📍 Taghazout</Sparkles>
        </Text>
        <Text
          fontSize={"25px"}
          fontWeight={"bold"}
          display={"inline"}
          float={"right"}
        >
          <Sparkles>🌡 31 °C</Sparkles>
        </Text>
      </Box>
      <Text fontSize={"17px"} opacity={0.8} mb={"20px"}>
        22/07/2022
      </Text>
      <Box>
        <Text fontSize={"25px"} fontWeight={"bold"}>
          🌞 UV index
        </Text>
        <Text fontSize={"35px"} fontWeight={"bold"} mt={"-16px"}>
          9
        </Text>
      </Box>
      <hr
        style={{
          borderStyle: "dashed",
          borderTopColor: "#00000030",
          marginBottom: "20px",
        }}
      />
      <Grid templateColumns={"repeat(12, 1fr)"}>
        <GridItem colSpan={6}>
          <Text fontSize={"20px"} fontWeight={"bold"}>
            <Sparkles> 🧴 Sunscreen's SPF </Sparkles>
          </Text>
          <Text fontSize={"30px"} mt={"-10px"} fontWeight={"bold"}>
            40 SPF
          </Text>
        </GridItem>
        <GridItem p={"5px"} colSpan={6}>
          <Center rounded={"14px"} bg={"#FFD6AE"} h={"100%"}>
            <Text fontWeight={"bold"}>🔗 examples</Text>
          </Center>
        </GridItem>
      </Grid>
      <hr
        style={{
          borderStyle: "dashed",
          borderTopColor: "#00000030",
          margin: "20px 0",
        }}
      />
      <Box>
        <Text fontSize={"20px"} fontWeight={"bold"}>
          <Sparkles>Protection ⛱</Sparkles>
        </Text>
        <Text>
          According to today’s UV follow these instructions for good skin
          protection
        </Text>
      </Box>
      <Box mt={"10px"}>
        <Instruction priority={"Required"} txt={"Use Sunscreen"} />
        <Instruction priority={"Required"} txt={"Use Sunscreen"} />
        <Instruction priority={"Required"} txt={"Use Sunscreen"} />
        <Instruction priority={"Required"} txt={"Use Sunscreen"} />
      </Box>
    </Box>
  );
};
