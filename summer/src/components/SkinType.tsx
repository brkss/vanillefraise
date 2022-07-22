import React from "react";
import { Box, Center, Text, Grid, GridItem } from "@chakra-ui/react";
import Sparkles from "./Sparkles";
const skins = [
  {
    color: "#EAD1B2",
  },
  {
    color: "#D9B490",
  },
  {
    color: "#C49E7D",
  },
  {
    color: "#AA7752",
  },

  {
    color: "#935D2F",
  },

  {
    color: "#341F1C",
  },
];

export const SkinType: React.FC = () => {
  return (
    <Box>
      <Text mb={"10px"} fontWeight={"bold"}>
        <Sparkles>Choose Your Skin Tone </Sparkles>
      </Text>
      <Grid templateColumns="repeat(12, 1fr)" gap={6}>
        {skins.map((skin, key) => (
          <GridItem key={key} colSpan={4}>
            <Center>
              <Box
                bg={skin.color}
                rounded={"14px"}
                w={"100px"}
                h={"100px"}
              ></Box>
            </Center>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};
