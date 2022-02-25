import React from "react";
import { Box, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  description?: string | null;
}

export const ListItem: React.FC<Props> = ({ title, description }) => {
  return (
    <Box mb={"10px"} bg={"#fbf3ed"} p={"20px"} borderRadius={"13px"}>
      <Text fontWeight={"bold"} fontSize={"23px"} mb={"5px"}>
        {title}
      </Text>
      <Text fontSize={"13px"}>{description}</Text>
    </Box>
  );
};
