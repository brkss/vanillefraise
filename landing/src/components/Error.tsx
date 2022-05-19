import React from "react";
import { Alert, AlertIcon, Text } from "@chakra-ui/react";

interface Props {
  text: string;
}

export const Error: React.FC<Props> = ({ text }) => {
  return (
    <Alert mb={"15px"} status="warning">
      <AlertIcon />
      <Text fontWeight={'bold'}>{text}</Text>
    </Alert>
  );
};
