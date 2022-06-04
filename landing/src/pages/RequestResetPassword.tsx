import React from "react";
import {
  Box,
  Text,
  Center,
  Input,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { TopBar } from "../components";
import { useRequestResetPasswordMutation } from "../generated/graphql";

export const RequestResetPassword: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [done, setDone] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [request] = useRequestResetPasswordMutation();

  const handleForm = (val: string) => {
    setEmail(val);
  };

  const handlePasswordRequest = () => {
    if (!email) return; // trugger error !
    setLoading(true);
    request({
      variables: {
        email: email,
      },
    }).then((res) => {
      setLoading(false);
      if (res.data?.requestResetPassword.status === true) {
        setDone(true);
      }
    });
    //console.log("email : ", email);
  };

  return (
    <Box>
      <TopBar />
      <Center minH={"100vh"}>
        <Box minW={"350px"}>
          {done ? (
            <Alert status="success" rounded={"10px"}>
              <AlertIcon />
              <AlertTitle>Email sent successfuly</AlertTitle>
              <AlertDescription>
                You'll recieve email with the reset link.
              </AlertDescription>
            </Alert>
          ) : (
            <>
              <Text fontSize={"15px"} fontWeight={"bold"} mb={"3px"}>
                Reset Password
              </Text>
              <Input
                _focus={{ outline: "none" }}
                fontWeight={"bold"}
                onChange={(e) => handleForm(e.currentTarget.value)}
                size={"lg"}
                type={"email"}
                variant={"filled"}
                placeholder={"email"}
                disabled={loading}
              />
              <Button
                _focus={{ outline: "none" }}
                fontSize={"15px"}
                mt={"10px"}
                onClick={() => handlePasswordRequest()}
                fontWeight={"bold"}
                size={"sm"}
                loadingText={"sending..."}
                isLoading={loading}
              >
                SEND
              </Button>
            </>
          )}
        </Box>
      </Center>
    </Box>
  );
};
