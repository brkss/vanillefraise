import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Styled from "@emotion/styled";

export const TopBar: React.FC = () => {
  return (
    <Bar>
      <Text
        textAlign={"center"}
        fontSize={{ md: "40px", base: "30px" }}
        fontFamily={"'DM Serif Display', serif"}
      >
        Vanille Fraise
      </Text>
    </Bar>
  );
};

const Bar = Styled.div`
    background: #fddddc;
    //background: inherit;
    /* padding: 6px 24px; */
    /* border-radius: 50px; */
    font-weight: bold;
    color: #f3b7b7;
    background-color: rgb(249 242 242 / 80%);
    backdrop-filter: blur(5px);
    position: fixed;
    width: 100%;
    z-index: 1000;
    padding: 0px;    
`;
