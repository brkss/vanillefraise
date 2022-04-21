import React from "react";
import { Center, Heading, Text, Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const Info: React.FC = () => {
  return (
    <Center w={"100%"} h={{ base: "100vh", md: "100%" }}>
      <Box w={"100%"}>
        <Heading
          fontSize={{ base: "35px", md: "50px" }}
          fontFamily={"monument"}
        >
          Refashion
          <br />
          Healthcare
          <br />
          and
          <br />
          Nutrition.
        </Heading>
        <Text
          fontSize={{ md: "23px", base: "16px" }}
          fontWeight={"400"}
          opacity={0.7}
          mt={"30px"}
        >
          Improve your nutrition and take care of your health <br />
          by helping you understand your body complex patterns.
        </Text>
        <Circle />
      </Box>
    </Center>
  );
};

const Circle = styled.div`
  display: none;
  position: absolute;
  height: 250px;
  width: 250px;
  background: #c8a9b6;
  border-radius: 100%;
  top: 50%;
  right: 10%;
  transform: translateY(-50%);
  z-index: 1;
`;
