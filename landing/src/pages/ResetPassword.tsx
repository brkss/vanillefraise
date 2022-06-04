import React from "react";
import { Box, Center, Input, Button, Text } from "@chakra-ui/react";
import { TopBar, Error } from "../components";
import { useParams } from "react-router-dom";
import { useResetPasswordMutation } from "../generated/graphql";

export const ResetPassword: React.FC = () => {
  const { token } = useParams() as any;
  const [loading, setLoading] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const [form, setForm] = React.useState<any>({});
  const [error, setError] = React.useState("");
  const [reset] = useResetPasswordMutation();

  const handleForm = (e: React.FormEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const handlePasswordReset = () => {
    if (!form || !form.pass || !form.rePass) {
      setError("Invalid Data");
      return;
    }
    if (form.pass !== form.rePass) {
      setError("Passwords doesn't match !");
      return;
    }
    console.log("form : ", form);
    setLoading(true);
    reset({
      variables: {
        pass: form.pass,
        token: token,
      },
    })
      .then((res) => {
        setLoading(true);
        if (res.data?.resetPassword.status === true) {
          setDone(true);
        } else if (res.data?.resetPassword.status === false) {
          setError(res.data.resetPassword.message || "Something went wrong !");
        }
      })
      .catch((e) => {
        setError("Something went wrong !");
      });
  };

  return (
    <>
      <TopBar />
      <Center h={"100vh"}>
        <Box p={"30px"} minW={"400px"}>
          {
            error ? <Error err={error} /> : null
          }
          <Text fontWeight={"bold"} mb={"6px"}>
            CHANGE PASSWORD
          </Text>
          <Input
            _focus={{ outline: "none" }}
            fontWeight={"bold"}
            id={"pass"}
            onChange={(e) => handleForm(e)}
            size={"lg"}
            type={"password"}
            variant={"filled"}
            placeholder={"new password"}
            mb={"10px"}
            //disabled={loading}
          />
          <Input
            _focus={{ outline: "none" }}
            fontWeight={"bold"}
            id={"rePass"}
            onChange={(e) => handleForm(e)}
            size={"lg"}
            type={"password"}
            variant={"filled"}
            placeholder={"repeat new password"}
            mb={"10px"}
            //disabled={loading}
          />
          <Button onClick={() => handlePasswordReset()} fontWeight={"bold"}>
            Set Password
          </Button>
        </Box>
      </Center>
    </>
  );
};
