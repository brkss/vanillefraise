import React from "react";
import { Box, Heading, Text, Center } from "@chakra-ui/react";
//const recipeScraper = require('recipe-scraper')

interface Props {
  url: string;
}

export const RecipePurview: React.FC<Props> = ({ url }) => {
  /*
  React.useEffect(() => {
    (async () => {
      await getRecipe();
    })();
  }, []);
  
  const getRecipe = async () => {
    const recipe = await recipeScraper(url);
    console.log("RECIPE : ", recipe);
  };
  */
  return (
    <Center p={"20px"} h={"100vh"}>
      <Text fontWeight={'bold'} textAlign={"center"}> Purview is currently unavailable </Text>
    </Center>
  );
};
