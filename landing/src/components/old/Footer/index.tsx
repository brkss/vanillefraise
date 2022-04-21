import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Text,
  Center,
  Link,
  Container,
} from "@chakra-ui/react";
import { FiInstagram, FiTwitter } from "react-icons/fi";

export const Footer: React.FC = () => {
  return (
    <Box
      p={"15px"}
      h={{ base: 150, md: 100 }}
      background={"#0E0E0E"}
      color={"#E7D1DA"}
    >
      <Container maxW="container.xl">
        <Center w={"100%"}>
          <Grid w={"100%"} templateColumns="repeat(9, 1fr)">
            <GridItem mt={"10px"} colSpan={{ base: 9, md: 3 }}>
              <Text fontSize={"20px"} fontWeight={"bold"}>
                OPEN CC 2022
              </Text>
            </GridItem>
            <GridItem
              mt={"10px"}
              colSpan={{ base: 9, md: 3 }}
              textAlign={{ base: "left", md: "center" }}
            >
              <Link href="https://twitter.com/openccapp" isExternal>
                <FiTwitter
                  style={{ display: "inline-block", marginRight: "20px" }}
                  size={25}
                />
              </Link>
              <Link href={"https://instagram.com/openccapp"} isExternal>
                <FiInstagram style={{ display: "inline-block" }} size={25} />
              </Link>
            </GridItem>
          </Grid>
        </Center>
      </Container>
    </Box>
  );
};
