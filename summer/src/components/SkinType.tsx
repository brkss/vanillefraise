import React from "react";
import { Box, Center, Text, Grid, GridItem } from "@chakra-ui/react";
import Sparkles from "./Sparkles";
import { SkinInfo } from "./SkinInfo";
import { Btn } from "./Button";
const skins = [
  {
    color: "#EAD1B2",
    title: "light",
    subtitle: "pale white.",
    description: "always burn, never tan.",
    emoji: "👩🏻",
  },
  {
    color: "#D9B490",
    title: "light",
    subtitle: "pale white.",
    description: "always burn, never tan.",
    emoji: "👩🏻",
  },
  {
    color: "#C49E7D",
    title: "light",
    subtitle: "pale white.",
    description: "always burn, never tan.",
    emoji: "👩🏻",
  },
  {
    color: "#AA7752",
    title: "light",
    subtitle: "pale white.",
    description: "always burn, never tan.",
    emoji: "👩🏻",
  },

  {
    color: "#935D2F",
    title: "light",
    subtitle: "pale white.",
    description: "always burn, never tan.",
    emoji: "👩🏻",
  },

  {
    color: "#341F1C",
    title: "light",
    subtitle: "pale white.",
    description: "always burn, never tan.",
    emoji: "👩🏻",
  },
];

export const SkinType: React.FC = () => {
  return (
    <Box>
      <Text mb={"10px"} fontWeight={"bold"}>
        <Sparkles>Choose Your Skin Tone </Sparkles>
      </Text>

      <SkinInfo
        emoji={skins[0].emoji}
        description={skins[0].description}
        subtitle={skins[0].subtitle}
        title={skins[0].title}
      />
      <Grid templateColumns="repeat(12, 1fr)" gap={6}>
        {skins.map((skin, key) => (
          <GridItem key={key} colSpan={4}>
            <Center>
              <Box
                border={key === 0 ? "2px solid #0000008c" : ""}
                bg={skin.color}
                rounded={"14px"}
                w={"100px"}
                h={"100px"}
              ></Box>
            </Center>
          </GridItem>
        ))}
      </Grid>
      <Btn clicked={() => {}} txt={"NEXT"} />
    </Box>
  );
};
