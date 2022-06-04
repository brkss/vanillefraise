import React from "react";
import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";

interface Props {
  err: string;
}

export const Error: React.FC<Props> = ({ err }) => {
  return (
    <Alert rounded={"10px"} my={"10px"} status="error">
      <AlertIcon />
      <AlertTitle>{err}</AlertTitle>
    </Alert>
  );
};
