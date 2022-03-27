import React from "react";
import { Box, Text } from "@chakra-ui/react";


interface Props {
  text: string;
  clicked: () => void;
}

export const NavigationItem: React.FC<Props> = ({clicked, text}) => {
  return (
    <Box onClick={() => clicked()} p={5} rounded={13} bg={"gray.50"}>
      <Text fontWeight={'bold'}>{text}</Text>
    </Box>
  );
};
