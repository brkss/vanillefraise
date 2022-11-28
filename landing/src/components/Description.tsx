import React from "react";
import { Center, Box, Text } from "@chakra-ui/react";
import { ImageOverview } from './ImagesOverview';

export const Description: React.FC = () => {
  return (
    <Center h={'100vh'} bg={'black'} p={{ md: "50px 20px 20px", base: "0px" }} pt={'50px'} >
      <Box>  
      <Box pos={"relative"}>
          <Text
            textAlign={'left'}
             w={{md: '70%', base: '90%'}}
            fontFamily={"AvBold"}
            m={'auto'}
            mb={"15px"}
            fontWeight={"bold"}
            fontSize={{ md: "30px", base: "23px" }}
            color={"white"}
          >
            Discover Recipes, Enjoy cooking and stay Healthy.
          </Text>
          <Box />
        </Box>
        <Text
          opacity={.8}
          m={'auto'}
          w={{md: '70%', base: '90%'}}
          textAlign={"left"}
          fontSize={{ md: "18px", base: "12px" }}
          lineHeight={{ md: "32px", base: "16px" }}
          //fontWeight={"bold"}
          color={"white"}
          //fontFamily={"AvBold"}
        >
          Vanille Fraise is an app to help you balance you nutrition. With
          taking in consideration your food intolerances, intake limit or simply
          you just want to eat and stay healthy, we’ve got you covered.
        </Text>
        <ImageOverview />
    </Box>
    </Center>
  );
};
