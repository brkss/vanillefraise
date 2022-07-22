import React from "react";
import { Box, position, Text } from "@chakra-ui/react";
import Sparkles from "./Sparkles";
import { Btn } from "./Button";
export const LocationPermission: React.FC = () => {
  const [cords, setCords] = React.useState({ lat: 0, lon: 0 });

  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        console.log("post : ", pos.coords.latitude, pos.coords.longitude);
        setCords({ lon: pos.coords.longitude, lat: pos.coords.latitude });
      },
      (e) => {
        console.log("Someting went wrong !");
      }
    );
  };

  return (
    <Box maxW={"350px"}>
      <Text fontSize={"20px"} fontWeight={"bold"}>
        <Sparkles>📍 Allow Location</Sparkles>
      </Text>
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
