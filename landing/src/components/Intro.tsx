import React from "react";
import { Center, Box, Text } from "@chakra-ui/react";

export const Intro: React.FC = () => {
  return (
    <Box h={"100vh"}>
      <Center h={"100vh"}>
        <Box
          rounded={"50px"}
          borderBottomLeftRadius={"10px"}
          p={"10px 20px"}
          bg={"#2294fb"}
          color={"white"}
        >
          <Text fontWeight={"bold"}>meet you for eggs in the morning ? 🍳</Text>
        </Box>
      </Center>
    </Box>
  );
};
