import React from "react";
import { Box, Alert, AlertIcon, Text } from "@chakra-ui/react";
import Sparkles from "./Sparkles";
import { Btn } from "./Button";

interface Props {
  forward: () => void;
  changed: (lat: string, lon: string) => void;
}

export const LocationPermission: React.FC<Props> = ({ forward, changed }) => {
  const [cords, setCords] = React.useState({ lat: 0, lon: 0 });
  const [error, setError] = React.useState("");

  /*
  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      changed(pos.coords.latitude.toString(), pos.coords.longitude.toString());
      forward();
    });
    }, []);*/

  const getError = (error: any) => {
    let e = "";
    switch (error.code) {
      case error.PERMISSION_DENIED:
        e = "You denied the request for Geolocation.";
        break;
      case error.POSITION_UNAVAILABLE:
        e = "Location information is unavailable.";
        break;
      case error.TIMEOUT:
        e = "The request to get location timed out.";
        break;
      case error.UNKNOWN_ERROR:
        e = "An unknown error occurred.";
        break;
    }
    return e;
  };

  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        console.log("post : ", pos.coords.latitude, pos.coords.longitude);
        setCords({ lon: pos.coords.longitude, lat: pos.coords.latitude });
        changed(
          pos.coords.latitude.toString(),
          pos.coords.longitude.toString()
        );
        forward();
      },
      (e) => {
        setError(getError(e));
        console.log("Someting went wrong !", e);
      }
    );
  };

  return (
    <Box maxW={"350px"}>
      <Text fontSize={"20px"} fontWeight={"bold"}>
        <Sparkles>📍 Allow Location</Sparkles>
      </Text>

      {error ? (
        <Alert
          rounded={"14px"}
          fontWeight={"bold"}
          marginY={"10px"}
          status="error"
        >
          <AlertIcon />
          {error}
        </Alert>
      ) : null}

      <Text mt={"20px"} fontWeight={"bold"}>
        why ? 🧐
      </Text>
      <Text>
        vanille fraise use location to get your location current ultra violet
        index, it helps understand how strong the sun’s UV rays will be.
      </Text>
      <Btn txt={"ALLOW"} clicked={handleLocation} />
    </Box>
  );
};
