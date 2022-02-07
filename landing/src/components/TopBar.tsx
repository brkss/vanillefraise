import React from "react";
import { Box, Image, Container } from "@chakra-ui/react";
import logo from "../assets/logo.png";

export const TopBar: React.FC = () => {
  return (
    <Box pos={"absolute"} w={"100%"} p={3}>
      <Container maxW="container.xl">
        <Image src={logo} w={70} />
      </Container>
    </Box>
  );
};
