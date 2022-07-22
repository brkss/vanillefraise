import React from "react";
import { Heading, Center, Box, Button, Text } from "@chakra-ui/react";
import { Intro, SkinType } from "../components";

export const Home: React.FC = () => {
  return (
    <Box h={"100vh"}>
      <Center h={"100%"} bg={"#FFEFD3"}>
        {/*<Intro />*/}
        <SkinType />
      </Center>
    </Box>
  );
};
