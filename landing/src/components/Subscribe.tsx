import React from "react";
import { Box, Input, Center, Text, Button, Image } from "@chakra-ui/react";
import logo from "../assets/lg.png";

export const Subscribe: React.FC = () => {
  return (
    //<Box h={"100vh"} borderTop={"1px solid #434343"}>*/}
    <Box h={"100vh"}>
      <Center h={"100vh"}>
        <Box padding={"20px"}>
          <Image rounded={"20px"} m={"40px 0"} w={"100px"} src={logo} />
          <Text fontSize={"20px"} fontWeight={"bold"}>
            GET INVITED
          </Text>
          <Input
            _focus={{ outline: 0 }}
            borderRadius={0}
            //border={"5px solid #464646"}
            //borderColor={"#464646"}
            p={"30px 20px"}
            fontWeight={"bold"}
            fontSize={"30px"}
            type={"email"}
            placeholder={"email"}
            background={"#ededed"}
            //placeholder={'example@example.com'}
          />
          <Button
            _hover={{ background: "black", opacity: 0.7, transition: ".3s" }}
            transition={".3s"}
            mt={"10px"}
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
