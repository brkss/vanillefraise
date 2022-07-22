import React from "react";
import { Heading, Center, Box, Button } from "@chakra-ui/react";

export const Home: React.FC = () => {
  return (
    <Box h={"100vh"}>
      <Center h={"100%"} bg={"#FFEFD3"}>
        <Box>
          <Heading textAlign={"center"}>
            Protect your skin, <br />
            The right way !
          </Heading>
          <Heading mt={"30px"} fontSize={"100px"} textAlign={"center"}>
            🌞
          </Heading>
          <Button
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
      </Center>
    </Box>
  );
};
