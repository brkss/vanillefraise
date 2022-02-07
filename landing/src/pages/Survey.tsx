import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import * as SurveyItems from "../components/SurveyItems";

export const Survey: React.FC = () => {
  return (
    <Box p={"15px"} bg={"#E7D1DA"} h={"100vh"}>
      <SurveyItems.Intrest />
    </Box>
  );
};
