import React from "react";
import { Box, Text } from "@chakra-ui/react";

interface Props {
  text: string;
  link: string;
}

export const NavigationItem: React.FC<Props> = ({ link, text }) => {
  return (
    <Box
      _hover={{ transition: "0.3s", translateY: -7 }}
      transition={".3s"}
      cursor={"pointer"}
      p={5}
      rounded={13}
      bg={"gray.50"}
    >
      <Text textAlign={"center"} fontWeight={"bold"}>
        {text}
      </Text>
    </Box>
  );
};