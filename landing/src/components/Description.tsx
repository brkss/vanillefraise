import React from "react";
import { Center, Box, Text } from "@chakra-ui/react";

export const Description: React.FC = () => {
  return (
    <Center p={{ md: "20px", base: "0px" }} mt={"30px"}>
      <Box w={{ md: "80%", base: "90%" }}>
        <Box pos={"relative"}>
          <Text
            fontFamily={"AvBold"}
            mb={"30px"}
            fontWeight={"bold"}
            fontSize={{ md: "30px", base: "25px" }}
            color={"#434343"}
          >
            Discover Recipes, Enjoy cooking it yourself, Stay Healthy.
          </Text>
          <Box />
        </Box>
        <Text
          textAlign={"left"}
          fontSize={{ md: "20px", base: "20px" }}
          lineHeight={{ md: "32px", base: "30px" }}
          fontWeight={"bold"}
          color={"#434343"}
          fontFamily={"AvBold"}
        >
          Vanille Fraise is an app that help you balance you nutrition. With
          taking in consideration your food intolerances, intake limit or simply
          you just want to eat and stay healthy, we’ve got you covered.
        </Text>
      </Box>
    </Center>
  );
};
