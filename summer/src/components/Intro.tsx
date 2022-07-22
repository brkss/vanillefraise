import React from "react";
import { Heading, Box, Button, Text } from "@chakra-ui/react";
import Sparkles from "./Sparkles";

interface Props {
  forward: () => void;
}

export const Intro: React.FC<Props> = ({forward}) => {
  return (
        <Box>
          <Heading textAlign={"center"}>
            <Sparkles>Protect your skin</Sparkles>, <br />
            <Sparkles>
              <Text fontWeight={"light"}>The right way !</Text>
            </Sparkles>
          </Heading>
          <Heading mt={"30px"} fontSize={"100px"} textAlign={"center"}>
            🌞
          </Heading>
          <Button
            onClick={forward}
            mt={"30px"}
            w={"100%"}
            bg={"#FBD5A2"}
            fontWeight={"bold"}
            _hover={{ background: "#FBD5A2" }}
            _focus={{ background: "#FBD5A2" }}
            borderRadius={"12px"}
          >
            START
          </Button>
        </Box>
  );
};
