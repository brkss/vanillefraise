import React from "react";
import { Box, Text } from "@chakra-ui/react";

export const TopBar: React.FC = () => {
  return (
    <>
      <Box position={"absolute"} w={"100%"} p={"4px"} bg={"#fbe5be"}>
        <Text
          fontFamily={"DM Serif Display"}
          fontSize={"22px"}
          fontWeight={"bold"}
          textAlign={"center"}
          color={"#434343"}
        >
          Vanille Fraise
        </Text>
        <Text
          textAlign={"center"}
          mt={"-10px"}
          letterSpacing={"13px"}
          opacity={0.8}
          ml={"15px"}
        >
          summer
        </Text>
      </Box>
      <Box h={"50px"} />
    </>
  );
};
