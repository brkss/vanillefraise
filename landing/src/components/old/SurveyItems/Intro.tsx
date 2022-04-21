import React from "react";
import { Center, Box, Input, Heading } from "@chakra-ui/react";
import { Btn, Inpt, Title } from "../Base";

export const Intro: React.FC = () => {
  return (
    <Center h={"100%"}>
      <Box>
        <Title txt={"What's your email ?"} />
        <Inpt placeholder={"Email"} type={"email"} />
        <Btn clicked={() => {}} txt={"Next"} />
      </Box>
    </Center>
  );
};
