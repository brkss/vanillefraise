import React from "react";
import { Heading } from "@chakra-ui/react";

interface Props {
  txt: string;
}

export const Title: React.FC<Props> = ({ txt }) => {
  return (
    <Heading
      fontWeight={"bold"}
      fontSize={"30px"}
      fontFamily={"monument"}
      mb={"10px"}
    >
      {txt}
    </Heading>
  );
};
