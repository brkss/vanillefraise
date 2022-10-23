import React from "react";
import { Center, Box, Text, Image, Button } from "@chakra-ui/react";
import cheese from "../assets/sandwish-fly.png";
import Sparkles from "./Sparkles";

export const Intro: React.FC = () => {
  return (
    <>
      <Box h={"100vh"}>
        <Center
          pos={"relative"}
          h={"100vh"}
          padding={"10px"}
          style={{
            //background:
            //"linear-gradient(180deg, rgba(251,248,248,1) 0%, rgba(254,208,208,1) 100%)",
            background: "black",
          }}
        >
          <Image zIndex={9} src={cheese} pos={"absolute"} />
          <Text
            fontWeight={"bold"}
            filter={"blur(.5px)"}
            width={{ md: "auto", base: "170%" }}
            fontSize={{ md: "40px", base: "17px" }}
            color={"white"}
            fontFamily={"AvBold"}
          >
            <Sparkles>For you to live longer</Sparkles>
          </Text>
          <Text
            fontWeight={"bold"}
            transform={{ lg: "translateY(150%)", base: "translateY(240%)" }}
            width={{ md: "auto", base: "150%" }}
            fontSize={{ md: "40px", base: "16px" }}
            zIndex={10}
            color={"white"}
            fontFamily={"AvBold"}
          >
            <Sparkles>healthier, and better.</Sparkles>
          </Text>
          <Box pos={"absolute"} bottom={{ lg: "50px", base: "20px" }}>
            <Box pos={"relative"}>
              <Button
                fontWeight={"bold"}
                _focus={{ outline: "none" }}
                _hover={{
                  background: "#f9f4f4",
                }}
                rounded={"50px"}
                background={"#f9f4f4"}
                color={"#f3b7b7"}
                padding={"23px 30px"}
                fontSize={"26px"}
                fontFamily={"AvBold"}
              >
                <Sparkles>Guess what, It's free !</Sparkles>
              </Button>
            </Box>
          </Box>
        </Center>
      </Box>
      <Box h={"10vh"} p={"10px 0"}>
        <Text
          zIndex={9}
          rounded={"17px"}
          w={"100%"}
          opacity={0.7}
          color={"#434343"}
          textAlign={"center"}
          fontSize={{ md: "20px", base: "13px" }}
          fontWeight={"bold"}
        >
          Balancing your nutrition has never been so simple.
        </Text>
        <Text
          zIndex={9}
          rounded={"17px"}
          w={"100%"}
          opacity={0.7}
          color={"#434343"}
          textAlign={"center"}
          fontSize={{ md: "15px", base: "12px" }}
        >
          🔒 Currently on Private Beta — Join the waitlist
        </Text>
      </Box>
    </>
  );
};
