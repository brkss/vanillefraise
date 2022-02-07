import React from "react";
import { Center, Box, Button, Input, Text, Heading } from "@chakra-ui/react";
import { useRequestResetPasswordMutation } from "../../generated/graphql";
import { Error } from "../../components";

export const ForgetPassword: React.FC = () => {
  const [requestResetPassword] = useRequestResetPasswordMutation();
  const [error, SetError] = React.useState("");
  const [email, SetEmail] = React.useState("");

  const handleEmail = (e: React.FormEvent<HTMLInputElement>) => {
    SetEmail(e.currentTarget.value);
  };

  const handleSend = () => {
    if (!email) {
      SetError("Missing Fields !");
      return;
    }
    SetError("");
    requestResetPassword({
      variables: {
        email: email,
      },
    }).then((res) => {
      console.log("res => ", res);
      if (!res || !res.data) {
        SetError("Something went wrong !");
      } else if (!res.data.requestResetPassword.status) {
        SetError(
          res.data.requestResetPassword.message || "Something went wrong !"
        );
      } else if (res.data.requestResetPassword.status) {
        SetError(`use this token \n${res.data.requestResetPassword.token}`);
      }
    });
    console.log("SEND email -> ", email);
  };

  return (
    <Center h={"100vh"}>
      <Box w={{ base: "100%", md: "500px" }}>
        <Heading fontSize={"28px"}>Reset Password</Heading>

        <Box marginTop={"5px"}>
          {error ? <Error text={error} /> : null}
          <Text fontWeight={"bold"}>Email :</Text>
          <Input
            placeholder={"Email"}
            onChange={(e) => handleEmail(e)}
            variant={"filled"}
          />
          <Button onClick={() => handleSend()} mt={"10px"} size={"sm"}>
            Send
          </Button>
        </Box>
      </Box>
    </Center>
  );
};
