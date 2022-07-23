import React from "react";
import { Box, Center, Grid, GridItem, Text } from "@chakra-ui/react";


const tmp = new Array(5).fill(0);

interface Props {
  changed: (hours: number) => void;
}

export const SunHoursSlider: React.FC<Props> = ({changed}) => {
  const [selected, setSelected] = React.useState(3);
  

  const select = (index: number) => {
    if (index > 0 && index < 6) {
      setSelected(index);
      changed(index);
    }
  };

  return (
    <Box marginY={"10px"} mb={"15px"}>
      <Text fontWeight={"bold"} mb={"5px"}>
        Hours in the sun
      </Text>
      <Grid templateColumns={"repeat(10, 1fr)"} gap={5}>
        {tmp.map((_, key) => (
          <GridItem colSpan={2} key={key}>
            <Center
              cursor={"pointer"}
              onClick={() => select(key + 1)}
              p={"8px"}
              bg={key + 1 === selected ? "#f8b772" : "#fed7ae"}
              rounded={"10px"}
              fontWeight={"bold"}
            >
              <Text>{key + 1}</Text>
            </Center>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};
