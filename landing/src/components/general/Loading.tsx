import React from "react";
import { Center, Spinner } from "@chakra-ui/react";

export const Loading: React.FC = () => {
  return (
    <Center h={"100vh"}>
      <Spinner />
    </Center>
  );
};
