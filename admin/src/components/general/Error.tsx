import React from "react";
import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";

interface Props {
  txt: string;
}

export const Error: React.FC<Props> = ({ txt }) => {
  return (
    <Alert rounded={10} mb={4} status="error">
      <AlertIcon />
      <AlertTitle> {txt} </AlertTitle>
    </Alert>
  );
};
