import React from "react";
import { Center, Box } from "@chakra-ui/react";
import { Title, Inpt, Btn } from "../Base";

export const Age: React.FC = () => {
  return (
    <Center h={"100%"}>
      <Box>
        <Title txt={"How old are you ?"} />
        <Inpt placeholder={"Age"} type={"number"} />
        <Btn txt={"Next."} clicked={() => {}} />
      </Box>
    </Center>
  );
};
