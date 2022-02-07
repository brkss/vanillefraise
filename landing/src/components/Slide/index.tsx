import React from "react";
import {
  Box,
  Heading,
  Text,
  Center,
  Image,
  Grid,
  GridItem,
  Container,
} from "@chakra-ui/react";
import logo from "../../assets/LOGO-opencc.png";
import styled from "@emotion/styled";
import { Form } from "./Form";
import { Info } from "./Info";

export const Slide: React.FC = () => {
  return (
    <Center p={"15px"} bg={"#E7D1DA"} minH={"100vh"} h={"auto"}>
      <Container maxW="container.xl">
        <Grid w={"100%"} templateColumns="repeat(6, 1fr)">
          <GridItem colSpan={{ base: 6, md: 3 }}>
            <Info />
          </GridItem>
          <GridItem colSpan={{ base: 6, md: 3 }}>
            <Form />
          </GridItem>
        </Grid>
      </Container>
    </Center>
  );
};
