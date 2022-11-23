import React from "react";
import { Center, Box, Text } from "@chakra-ui/react";

export const Description: React.FC = () => {
  return (
    <Box h={'100vh'} bg={'black'} p={{ md: "50px 20px 20px", base: "0px" }} pt={'50px'} >
        <Box pos={"relative"}>
          <Text
            textAlign={'center'}
            fontFamily={"AvBold"}
            mb={"15px"}
            fontWeight={"bold"}
            fontSize={{ md: "30px", base: "25px" }}
            color={"white"}
          >
            Discover Recipes, Enjoy cooking it yourself, Stay Healthy.
          </Text>
          <Box />
        </Box>
        <Text
          opacity={.8}
          m={'auto'}
          w={{md: '70%', base: '90%'}}
          textAlign={"center"}
          fontSize={{ md: "16px", base: "14px" }}
          lineHeight={{ md: "32px", base: "30px" }}
          fontWeight={"bold"}
          color={"white"}
          fontFamily={"AvBold"}
        >
          Vanille Fraise is an app that help you balance you nutrition. With
          taking in consideration your food intolerances, intake limit or simply
          you just want to eat and stay healthy, we’ve got you covered.
        </Text>
    </Box>
  );
};
