import React from "react";
import { Box, Center, Heading, Grid, GridItem } from "@chakra-ui/react";
import { NavigationItem } from "./Item";

const links = [
  {
    txt: "Recipes",
    link: "#",
  },
  {
    txt: "Users",
    link: "#",
  },
  {
    txt: "Statistics",
    link: "#",
  },
];

export const Navigation: React.FC = () => {
  return (
    <Center h={"100vh"}>
      <Box>
        <Grid gap={5} templateColumns="repeat(10, 1fr)" h={"100%"}>
          {links.map((l, key) => (
            <GridItem key={key} colSpan={2}>
              <NavigationItem link={l.link} text={l.txt} />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Center>
  );
};
