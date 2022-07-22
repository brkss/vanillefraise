import React from "react";
import { Box, Center, Text, Grid, GridItem } from "@chakra-ui/react";
import Sparkles from "./Sparkles";
import { SkinInfo } from "./SkinInfo";
import { Btn } from "./Button";
const skins = [
  {
    id: 1,
    color: "#EAD1B2",
    title: "light",
    subtitle: "pale white.",
    description: "always burn, never tan.",
    emoji: "🧑🏼‍🦱",
  },
  {
    id: 2,
    color: "#D9B490",
    title: "White",
    subtitle: "Fair.",
    description: "usually burns, tans with difficulty.",
    emoji: "🧑🏻‍🦱",
  },
  {
    id: 3,
    color: "#C49E7D",
    title: "Medium",
    subtitle: "White to olive.",
    description: "Burns Middly, tans gradually",
    emoji: "🧑🏻‍🦱",
  },
  {
    id: 4,
    color: "#AA7752",
    title: "Olive",
    subtitle: "Moderate Brown.",
    description: "Rarly burns, tans with ease.",
    emoji: "🧑🏽‍🦱",
  },
  {
    id: 5,
    color: "#935D2F",
    title: "Brown",
    subtitle: "Dark Brown.",
    description: "Very rarely burns, tans very easily",
    emoji: "🧑🏾‍🦱",
  },
  {
    id: 6,
    color: "#341F1C",
    title: "Black",
    subtitle: "very dark brown to black.",
    description: "never burns, tans very easily.",
    emoji: "🧑🏿‍🦱",
  },
];

interface Props {
  forward: () => void;
}

export const SkinType: React.FC<Props> = ({forward}) => {
  const [selected, setSelected] = React.useState(skins[0]);

  const select = (index: number) => {
    setSelected(skins[index]);
  };

  return (
    <Box>
      <Text mb={"10px"} fontWeight={"bold"}>
        <Sparkles>Choose Your Skin Tone </Sparkles>
      </Text>

      <SkinInfo
        emoji={selected.emoji}
        description={selected.description}
        subtitle={selected.subtitle}
        title={selected.title}
      />
      <Grid templateColumns="repeat(12, 1fr)" gap={6}>
        {skins.map((skin, key) => (
          <GridItem key={key} colSpan={4}>
            <Center>
              <Box
                cursor={"pointer"}
                onClick={() => select(key)}
                border={skin.id === selected.id ? "2px solid #0000008c" : ""}
                bg={skin.color}
                rounded={"14px"}
                w={"100px"}
                h={"100px"}
              ></Box>
            </Center>
          </GridItem>
        ))}
      </Grid>
      <Btn clicked={forward} txt={"NEXT"} />
    </Box>
  );
};
