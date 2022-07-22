import React from "react";
import { Box, Text } from "@chakra-ui/react";

interface Props {
  txt: string;
  priority: string;
}

export const Instruction: React.FC<Props> = ({ priority, txt }) => {
  return (
    <Box mb={'10px'} rounded={"14px"} bg={"#FFD6AE"} p={"10px 20px"}>
      <Text fontSize={"16px"} fontWeight={"bold"}>
        {txt}
      </Text>
      <Text fontSize={"14px"} mt={"-4px"} opacity={0.7}>
        {priority}
      </Text>
    </Box>
  );
};
