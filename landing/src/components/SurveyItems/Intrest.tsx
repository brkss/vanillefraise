import React from "react";
import { Center, Box } from "@chakra-ui/react";
import { Title, Choices, Btn } from "../Base";

export const Intrest: React.FC = () => {
  return (
    <Center h={"100%"}>
      <Box>
        <Title txt={"What is intresting about OPENCC"} />
        <Choices />
        <Btn txt={"Nex."} clicked={() => {}} />
      </Box>
    </Center>
  );
};
