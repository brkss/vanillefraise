import React from "react";
import { Center, Box, Text, Image, Button, keyframes } from "@chakra-ui/react";
import cheese from "../assets/sandwish-fly.png";
import Sparkles from "./Sparkles";
import { IoArrowDownCircleOutline } from "react-icons/io5";

const spin = keyframes`
  0% { transform: translateY(0px); }
                <Sparkles> <IoArrowDownCircleOutline /> Download, It's free !</Sparkles>  25% { transform: translateY(5px); }
  50% { transform: translateY(10px); }
  75% { transform: translateY(5px); }
  100% { transform: translateY(0px) }`;

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
          <Image
            animation={`${spin} infinite 10s linear`}
            zIndex={9}
            src={cheese}
            pos={"absolute"}
          />
          <Text
            animation={`${spin} infinite 10s linear`}
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
                _focus={{ outline: "none", background: "transparent" }}
                _hover={{ background: "transparent" }}
                rounded={"50px"}
                background={"transparent"}
                color={"#f3b7b7"}
                padding={"23px 30px"}
                fontSize={{ md: "23px", base: "17px" }}
                fontFamily={"AvBold"}
              >
                <Sparkles>
                  {" "}
                  <IoArrowDownCircleOutline
                    style={{ display: "none", marginBottom: '-3px' }}
                  />{" "}
                  Watch The Film
                </Sparkles>
              </Button>
            </Box>
          </Box>
        </Center>
      </Box>
      <Box d={'none'} h={"10vh"} p={"10px 0"}>
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
