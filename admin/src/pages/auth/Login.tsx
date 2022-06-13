import React from "react";
import { Box, Center, Input, Button, Heading } from "@chakra-ui/react";
import { useLoginMutation } from "../../generated/graphql";
import { setToken } from "../../utils/token/token";
import { useHistory } from "react-router-dom";
import { Error } from "../../components";

export const Login: React.FC = () => {
  const [form, setForm] = React.useState<any>({});
  const [login] = useLoginMutation();
  const history = useHistory();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

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
    setLoading(true);
    login({
      variables: {
        username: form.username,
        password: form.password,
      },
    })
      .then((res) => {
        setLoading(false);
        console.log("res =>> ", res);
        if (!res || !res.data?.loginAdmin.token || res.errors) {
          setError(res.data?.loginAdmin.message || "something went wrong !");
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
          {error ? <Error txt={error} /> : null}
          <Input
            type={"text"}
            variant={"filled"}
            placeholder={"username"}
            id={"username"}
            onChange={(e) => handleForm(e)}
            mb={"20px"}
            disabled={loading}
          />
          <Input
            type={"password"}
            variant={"filled"}
            placeholder={"password"}
            id={"password"}
            onChange={(e) => handleForm(e)}
            mb={"20px"}
            disabled={loading}
          />
          <Button
            loadingText={"logging..."}
            isLoading={loading}
            onClick={() => handlelogin()}
            size={"md"}
            variant={"outline"}
          >
            Login
          </Button>
        </Box>
      </Center>
    </Box>
  );
};
