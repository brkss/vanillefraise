import React from "react";
import { Box, Center, Input, Button, Heading } from "@chakra-ui/react";

export const Login: React.FC = () => {
  const [form, setForm] = React.useState<any>({});

  const handleForm = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    setForm({
      ...form,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const login = () => {
    console.log("FORM ==> ", form);
  };

  return (
    <Box h={"100vh"}>
      <Center h={"100vh"}>
        <Box>
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
          <Button onClick={() => login()} size={"md"} variant={"outline"}>
            Login
          </Button>
        </Box>
      </Center>
    </Box>
  );
};
