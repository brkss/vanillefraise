import React from "react";
import { Box, Center, Input, Button, Heading } from "@chakra-ui/react";
import { useLoginMutation } from "../../generated/graphql";
import { setToken } from "../../utils/token/token";
import { useHistory } from "react-router-dom";

export const Login: React.FC = () => {
  const [form, setForm] = React.useState<any>({});
  const [login] = useLoginMutation();
  const history = useHistory();

  const handleForm = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    setForm({
      ...form,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const handlelogin = () => {
    if (!form || !form.username || !form.password) {
      // trigger error !
      return;
    }
    login({
      variables: {
        username: form.username,
        password: form.password,
      },
    })
      .then((res) => {
        console.log("res =>> ", res);
        if (!res || !res.data?.loginAdmin.token || res.errors) {
          // trigger error !
          return;
        }
        const _token = res.data.loginAdmin.token;
        setToken(_token);
        history.push("/");
      })
      .catch((e) => {
        console.log("Something went wrong login admin : ", e);
        // trigger err !;
        return;
      });
    console.log("FORM ==> ", form);
  };

  return (
    <Box h={"100vh"}>
      <Center h={"100vh"}>
        <Box w={"300px"}>
          <Heading mb={"20px"}>Login</Heading>
          <Input
            type={"text"}
            variant={"filled"}
            placeholder={"username"}
            id={"username"}
            onChange={(e) => handleForm(e)}
            mb={"20px"}
          />
          <Input
            type={"password"}
            variant={"filled"}
            placeholder={"password"}
            id={"password"}
            onChange={(e) => handleForm(e)}
            mb={"20px"}
          />
          <Button onClick={() => handlelogin()} size={"md"} variant={"outline"}>
            Login
          </Button>
        </Box>
      </Center>
    </Box>
  );
};
