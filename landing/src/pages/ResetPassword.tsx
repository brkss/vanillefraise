import React from "react";
import { Box, Text, Center, Input, Button } from "@chakra-ui/react";
import { TopBar } from "../components";
import { usePingQuery } from "../generated/graphql";
import { Loading } from "../components";

export const ResetPassword: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const { data, loading, error } = usePingQuery();

  const handleForm = (val: string) => {
    setEmail(val);
  };

  const handlePasswordRequest = () => {
    if (!email) return; // trugger error !
    console.log("email : ", email);
  };

  if (loading || error) {
    return <Loading />;
  }
  return (
    <Box>
      <TopBar />
      <Center minH={"100vh"}>
        <Box minW={"350px"}>
          <Text fontSize={"15px"} fontWeight={"bold"} mb={"3px"}>
            Reset Password {data?.ping}
          </Text>
          <Input
            _focus={{ outline: "none" }}
            fontWeight={"bold"}
            onChange={(e) => handleForm(e.currentTarget.value)}
            size={"lg"}
            type={"email"}
            variant={"filled"}
            placeholder={"email"}
          />
          <Button
            _focus={{ outline: "none" }}
            fontSize={"15px"}
            mt={"10px"}
            onClick={() => handlePasswordRequest()}
            fontWeight={"bold"}
            size={"sm"}
          >
            SEND
          </Button>
        </Box>
      </Center>
    </Box>
  );
};
