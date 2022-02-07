import React from "react";
import { Box, Text } from "@chakra-ui/react";

interface Props {
  text: string;
}

export const Error: React.FC<Props> = ({ text }) => {
  return (
    <Box
      fontWeight={"bold"}
      border={"1px solid #f3c6c661"}
      rounded={"5px"}
      padding={"13px"}
      marginBottom={"11px"}
      bg={"red.50"}
      textAlign={"center"}
    >
      <Text> {text} </Text>
    </Box>
  );
};
