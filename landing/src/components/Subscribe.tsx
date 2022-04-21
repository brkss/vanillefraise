import React from "react";
import { Box, Input, Center, Text, Button, Image } from "@chakra-ui/react";
import logo from "../assets/lg.png";

export const Subscribe: React.FC = () => {
  return (
    <Box h={"100vh"} borderTop={"1px solid #434343"}>
      <Center h={"100vh"}>
        <Box>
          <Image rounded={"20px"} m={"40px 0"} w={"100px"} src={logo} />
          <Text fontSize={"20px"} fontWeight={"bold"}>
            GET EARLY ACCESS
          </Text>
          <Input
            _focus={{ outline: 0, borderColor: "black" }}
            _hover={{ borderColor: "black" }}
            borderRadius={0}
            border={"3px solid black"}
            borderColor={"black"}
            p={"30px 20px"}
            fontWeight={"bold"}
            fontSize={"30px"}
            type={"email"}
            placeholder={"email"}
            //placeholder={'example@example.com'}
          />
          <Button
            _hover={{ background: "black", opacity: 0.7, transition: ".3s" }}
            transition={".3s"}
            mt={"20px"}
            p={"25px 10px"}
            //w={"105px"}
            borderRadius={0}
            fontSize={"30px"}
            fontWeight={"bold"}
            color={"white"}
            bg={"black"}
          >
            JOIN
          </Button>
        </Box>
      </Center>
    </Box>
  );
};
