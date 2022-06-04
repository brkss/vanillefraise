import React from "react";
import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";

interface Props {
  err: string;
  success?: boolean;
}

export const Error: React.FC<Props> = ({ err, success }) => {
  return (
    <Alert rounded={"10px"} my={"10px"} status={success ? "success" : "error"}>
      <AlertIcon />
      <AlertTitle>{err}</AlertTitle>
    </Alert>
  );
};

