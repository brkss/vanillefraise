import React from "react";
import { Box, Heading, Center, Button } from "@chakra-ui/react";

export const About: React.FC = () => {
  return (
    <Center bg={"#fff3f8"} h={"100vh"}>
      <Box>
        <Heading fontFamily={"monument"} fontSize={"40px"}>
          What the %$^& is that ?
        </Heading>
        <Button
          bg={"#434343"}
          color={"white"}
          d={"block"}
          m={"auto"}
          _hover={{ background: "black" }}
          mt={"40px"}
        >
          Find Out Yourself !
        </Button>
      </Box>
    </Center>
  );
};
