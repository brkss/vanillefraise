import React from "react";
import { Heading, Center, Box, Button, Text } from "@chakra-ui/react";
import { Intro, SkinType, LocationPermission, Results } from "../components";

const steps = ["INTRO", "SKINTYPE", "LOCATION", "RESULTS"];

export const Home: React.FC = () => {
  const [step, setStep] = React.useState(0);
  const [data, setData] = React.useState({
    city: "",
    temperature: "",
    skinId: 1,
    coords: { lat: "", lon: "" },
    uv: 0,
    hours: 3,
    date: new Date(),
  });

  const forward = () => {
    if (step < steps.length - 1) setStep((curr) => curr + 1);
  };

  return (
    <Box minH={"100vh"}>
      <Center minH={"100vh"} bg={"#FFEFD3"}>
        {
          {
            INTRO: <Intro forward={forward} />,
            SKINTYPE: (
              <SkinType
                changed={(id) => setData({ ...data, skinId: id })}
                forward={forward}
              />
            ),
            LOCATION: (
              <LocationPermission
                changed={(lat, lon) =>
                  setData({ ...data, coords: { lon: lon, lat: lat } })
                }
                forward={forward}
              />
            ),
            RESULTS: <Results data={data} />,
          }[steps[step]]
        }
      </Center>
    </Box>
  );
};
