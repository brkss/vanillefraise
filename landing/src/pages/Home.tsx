import React from "react";
import { Box, Container } from "@chakra-ui/react";
import { Slide, TopBar, Footer } from "../components";

export const Home: React.FC = () => {
  return (
    <Box>
      <TopBar />
      <Slide />
      <Footer />
    </Box>
  );
};
