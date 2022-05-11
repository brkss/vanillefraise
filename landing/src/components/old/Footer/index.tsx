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
    <Box p={"15px"} pb={"20px"} background={"#0E0E0E"} color={"#E7D1DA"}>
      <Container maxW="container.xl">
        <Center w={"100%"}>
          <Grid w={"100%"} templateColumns="repeat(12, 1fr)">
            <GridItem mt={"10px"} colSpan={{ base: 6, md: 6 }}>
              <Text fontSize={{ md: "20px", base: "15px" }} fontWeight={"bold"}>
                VANILLE FRAISE
              </Text>
            </GridItem>
            <GridItem
              mt={"10px"}
              colSpan={{ base: 6, md: 6 }}
              textAlign={{ base: "right", md: "right" }}
            >
              <Link href="https://twitter.com/openccapp" isExternal>
                <FiTwitter
                  style={{ display: "inline-block", marginRight: "20px" }}
                  size={20}
                />
              </Link>
              <Link href={"https://instagram.com/openccapp"} isExternal>
                <FiInstagram style={{ display: "inline-block" }} size={20} />
              </Link>
            </GridItem>
          </Grid>
        </Center>
      </Container>
    </Box>
  );
};
