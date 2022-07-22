import React from "react";
import { Heading, Center, Box, Button, Text } from "@chakra-ui/react";
import { Intro, SkinType, LocationPermission, Results } from "../components";

const steps = ["INTRO", "SKINTYPE", "LOCATION", "RESULTS"];

export const Home: React.FC = () => {
  const [step, setStep] = React.useState(0);

  const forward = () => {
    if (step < steps.length - 1) setStep((curr) => curr + 1);
  };

  return (
    <Box h={"100vh"}>
      <Center h={"100%"} bg={"#FFEFD3"}>
        {
          {
            INTRO: <Intro forward={forward} />,
            SKINTYPE: <SkinType forward={forward} />,
            LOCATION: <LocationPermission forward={forward} />,
            RESULTS: <Results />,
          }[steps[step]]
        }
      </Center>
    </Box>
  );
};
