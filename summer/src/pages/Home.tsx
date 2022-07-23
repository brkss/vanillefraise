import React from "react";
import { Heading, Center, Box, Button, Text } from "@chakra-ui/react";
import { Intro, SkinType, LocationPermission, Results } from "../components";
import { getMetadata, reset } from "../utils/storage";

const steps = ["INTRO", "SKINTYPE", "LOCATION", "RESULTS"];

export const Home: React.FC = () => {
  const [loading, setLoading] = React.useState(true);
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

  React.useEffect(() => {
    const md = getMetadata();
    if (md && md.locationPermision) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setData({
          ...data,
          skinId: md.skinId,
          coords: {
            lat: pos.coords.latitude.toString(),
            lon: pos.coords.longitude.toString(),
          },
        });
        setStep(steps.length - 1);
        setLoading(false);
      });
    } else setLoading(false);
  }, []);

  const forward = () => {
    if (step < steps.length - 1) setStep((curr) => curr + 1);
  };

  if (loading)
    return (
      <Box minH={"100vh"}>
        <Center minH={"100vh"} bg={"#FFEFD3"}>
          <Text>✨ Doing the magic ...</Text>
        </Center>
      </Box>
    );

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
            RESULTS: <Results reset={() => {reset(); setStep(0)}} data={data} />,
          }[steps[step]]
        }
      </Center>
    </Box>
  );
};
