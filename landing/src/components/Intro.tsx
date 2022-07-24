import React from "react";
import { Center, Box, Text, Image, Button } from "@chakra-ui/react";
import cheese from "../assets/sandwish-fly.png";

export const Intro: React.FC = () => {
  return (
    <>
      <Box h={"90vh"}>
        <Center
          pos={"relative"}
          h={"90vh"}
          padding={"10px"}
          style={{
            background:
              "linear-gradient(180deg, rgba(251,248,248,1) 0%, rgba(254,208,208,1) 100%)",
          }}
        >
          <Image zIndex={9} src={cheese} pos={"absolute"} />
          <Text
            fontWeight={"bold"}
            filter={"blur(.5px)"}
            width={{ md: "auto", base: "170%" }}
            fontSize={{ md: "40px", base: "17px" }}
            color={"#434343"}
          >
            Helping you live longer
          </Text>
          <Text
            fontWeight={"bold"}
            transform={{ lg: "translateY(150%)", base: "translateY(240%)" }}
            width={{ md: "auto", base: "150%" }}
            fontSize={{ md: "40px", base: "16px" }}
            zIndex={10}
            color={"#434343"}
          >
            healthier, and better.
          </Text>
          <Box pos={"absolute"} bottom={{ lg: "50px", base: "20px" }}>
            <Box pos={"relative"}>
              <Text
                pos={"absolute"}
                fontSize={"30px"}
                zIndex={99}
                top={"-13px"}
              >
                ✨
              </Text>
              <Button
                fontWeight={"bold"}
                _focus={{ outline: "none" }}
                _hover={{
                  background: "#fe8285",
                  color: "white",
                  opacity: 1,
                  transition: 0.3,
                }}
                rounded={"50px"}
                background={"#fe8285"}
                color={"white"}
                padding={"21px 14px"}
                border={"6px solid #ffbdbe"}
              >
                Guess what, It's free !
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
          ✨ Balancing your nutrition has never been so simple. ✨
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
