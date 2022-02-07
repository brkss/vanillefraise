import React from "react";
import { Center, Heading } from "@chakra-ui/react";

export const PaymentSuccess: React.FC = () => {
  return (
    <Center h={"100vh"}>
      <Heading fontSize={"20px"}> 🦆 Your payment has been confirmed!</Heading>
    </Center>
  );
};
