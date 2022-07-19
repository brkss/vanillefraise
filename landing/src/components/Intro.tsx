import React from "react";
import { Center, Box, Text, Image, Button } from "@chakra-ui/react";
const cloud = require("../assets/cloud.png");
const cheese = require("../assets/sandwish-fly.png");

export const Intro: React.FC = () => {
  return (
    <Box h={"100vh"}>
      <Center
        pos={"relative"}
        h={"100vh"}
        padding={"10px"}
        style={{
          background:
            "linear-gradient(180deg, rgba(251,248,248,1) 0%, rgba(254,208,208,1) 100%)",
        }}
      >
        <Image src={cheese} pos={"absolute"} />
        <Text
          fontWeight={"bold"}
          //zIndex={999}
          width={{ lg: "auto", base: "110%" }}
          fontSize={{ lg: "40px", base: "17px" }}
          color={"#434343"}
        >
          Extend your lifespan
        </Text>
        <Text
          fontWeight={"bold"}
          transform={{ lg: "translateY(150%)", base: "translateY(240%)" }}
          width={{ lg: "auto", base: "110%" }}
          fontSize={{ lg: "40px", base: "20px" }}
          //zIndex={999}
          color={"#434343"}
        >
          by up to ten-years.
        </Text>
        <Button
          fontWeight={"bold"}
          pos={"absolute"}
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
          bottom={{ lg: "50px", base: "20px" }}
          padding={"21px 14px"}
          border={"6px solid #ffbdbe"}
        >
          ✨ Get Started, It's Free. ✨
        </Button>
      </Center>
    </Box>
  );
};
