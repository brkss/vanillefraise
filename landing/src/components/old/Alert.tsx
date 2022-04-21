import React from "react";
import { Center, Text } from "@chakra-ui/react";

interface Props {
  txt: string;
  type: string;
}

export const Alert: React.FC<Props> = ({ txt, type }) => {
  return (
    <Center
      bg={type == "warn" ? "#ffff6c" : "#6cff79"}
      p={"15px"}
      rounded={"10px"}
      mb={"10px"}
    >
      <Text fontSize={"13px"} fontWeight={"bold"}>
        {txt}
      </Text>
    </Center>
  );
};
