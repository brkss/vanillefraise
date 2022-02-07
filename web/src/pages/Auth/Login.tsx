import React from "react";
import { Box, Center, Input, Button, Heading, Link } from "@chakra-ui/react";
import { useLoginMutation } from "../../generated/graphql";
import { Error } from "../../components";
import { setAccessToken, getAccessToken } from "../../utils/token/token";
import { useHistory } from "react-router-dom";

export const Login: React.FC = () => {
  const [login] = useLoginMutation();
  const [error, SetError] = React.useState("");
  const [form, SetForm] = React.useState<any>({});
  const history = useHistory();

  const handleForm = (e: React.FormEvent<HTMLInputElement>) => {
    SetForm({
      ...form,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const handleLogin = () => {
    if (!form || !form.email || !form.password) {
      SetError("Missing informations !");
      return;
    }
    login({
      variables: {
        email: form.email,
        password: form.password,
      },
    }).then((res) => {
      console.log("login response => ", res);
      if (!res.data) {
        SetError("Somethin g went wrong !");
      } else if (!res.data.login.status) {
        SetError(res.data.login.message as string);
      } else if (res.data.login.token) {
        console.log("TOKEN set successfuly !");
        setAccessToken(res.data.login.token);
        history.push("/dashboard");
      }
    });
  };

  if (getAccessToken()) history.push("/dashboard");

  return (
    <Box h={"100vh"}>
      <Center h={"100vh"}>
        <Box w={{ md: "20%", base: "100%" }}>
          <Heading mb={"15px"}>Login</Heading>
          {error ? <Error text={error} /> : null}
          <Input
            id="email"
            mb={"10px"}
            placeholder={"Email"}
            type={"email"}
            variant={"filled"}
            onChange={(e) => handleForm(e)}
          />
          <Input
            mb={"10px"}
            placeholder={"Password"}
            type={"password"}
            variant={"filled"}
            id="password"
            onChange={(e) => handleForm(e)}
          />
          <Box m={"2px 0 10px"}>
            <Link onClick={() => history.push("/forget-password")}>
              Forget your password ?
            </Link>
          </Box>
          <Button onClick={handleLogin} variant={"solid"}>
            {" "}
            Login{" "}
          </Button>
        </Box>
      </Center>
    </Box>
  );
};
