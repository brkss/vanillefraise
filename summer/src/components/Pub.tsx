import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";
import Sparkles from "./Sparkles";

export const Pub: React.FC = () => {
  return (
    <Link
      href={"https://vanillefraise.me"}
      target={"_blank"}
      _hover={{ textDecoration: "none" }}
      display={"block"}
      marginY={"10px"}
      p={"12px"}
      bg={"#ffdfb7"}
      rounded={"15px"}
    >
      <Sparkles>
        <Text fontSize={"12px"} fontWeight={"bold"}>
          Refreshing recipes and drinks for a healthy summer 😋
        </Text>
        <Text opacity={0.7} fontSize={"12px"}>
          at Vanille Fraise{" "}
          <IoIosArrowForward
            style={{ display: "inline", marginBottom: "-2px" }}
          />{" "}
        </Text>
      </Sparkles>
    </Link>
  );
};
