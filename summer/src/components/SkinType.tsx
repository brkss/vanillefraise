import React from "react";
import { Box, Center, Text, Grid, GridItem } from "@chakra-ui/react";
import Sparkles from "./Sparkles";
import { SkinInfo } from "./SkinInfo";
import { Btn } from "./Button";
import { skins } from '../utils/data/skins'

interface Props {
  forward: () => void;
}

export const SkinType: React.FC<Props> = ({ forward }) => {
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
