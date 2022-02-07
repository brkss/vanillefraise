import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input, Center, Heading, Container, Button } from "native-base";
import { useLoginMutation } from "../../generated/graphql";
import { setAccessToken } from "../../utils";
import { AuthContext } from "../../utils/auth/AuthProvider";
import * as SecureStore from "expo-secure-store";

export const Login: React.FC<any> = ({ navigation }) => {
  const _ctx = React.useContext(AuthContext);
  const [login] = useLoginMutation();
  const [loading, SetLoading] = React.useState(false);
  const [error, SetError] = React.useState("");
  const [form, SetForm] = React.useState({
    email: "",
    password: "",
  });

  const handleForm = (val: string, key: string) => {
    SetForm({
      ...form,
      [key]: val,
    });
  };

  const handleLogin = async () => {
    if (!form.email || !form.password) {
      // error : missing data !
      SetError("Missing Fields");
      return;
    }
    SetError("");
    SetLoading(true);
    login({
      variables: {
        email: form.email,
        password: form.password,
      },
    }).then(async (res) => {
      SetLoading(false);
      if (!res || !res.data || res.errors) {
        // error
        SetError("Somnething went wrong !");
      } else if (!res.data.login.status) {
        SetError(res.data.login.message || "Somnething went wrong");
      } else if (
        res.data.login.status &&
        res.data.login.token &&
        res.data.login.rToken
      ) {
        // login successfuly !!
        const _token = res.data.login.token;
        const _refreshToken = res.data.login.rToken;
        await SecureStore.setItemAsync("TOKEN", _refreshToken);
        setAccessToken(_token);
        _ctx.login(_token);
        console.log(
          "refresh token : ",
          await SecureStore.getItemAsync("TOKEN")
        );
      }
    });
  };

  return (
    <Center w={"100%"} flex={1}>
      <Container w={"100%"}>
        <Heading mb={"10px"}>Login </Heading>
        <Input
          value={form.email}
          w={"100%"}
          size={"md"}
          variant={"filled"}
          placeholder={"Email"}
          onChangeText={(val) => handleForm(val, "email")}
        />
        <Input
          value={form.password}
          w={"100%"}
          size={"md"}
          secureTextEntry={true}
          variant={"filled"}
          mt={"10px"}
          placeholder={"Password"}
          onChangeText={(val) => handleForm(val, "password")}
        />
        <Button
          onPress={() => handleLogin()}
          colorScheme="dark"
          mt={"10px"}
          isLoading={loading}
          variant={"subtle"}
        >
          Login
        </Button>
      </Container>
    </Center>
  );
};
