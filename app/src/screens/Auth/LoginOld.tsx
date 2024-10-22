import React from "react";
import {
  Alert,
  Linking,
  ActivityIndicator,
  Pressable,
  Text,
  StyleSheet,
} from "react-native";
import { Center, Heading, Container } from "native-base";
import { useLoginMutation } from "../../generated/graphql";
import { getAccessToken, setAccessToken } from "../../utils";
import { AuthContext } from "../../utils/auth/AuthProvider";
import * as SecureStore from "expo-secure-store";
import { useFonts } from "expo-font";
import { Button, Input, Error } from "../../components";
import { _log } from "../../utils/debug";

export const Login: React.FC<any> = ({ navigation }) => {
  const [helviticaCondensed] = useFonts({
    "helvitica-condesed": require("../../assets/helvitica-condensed.otf"),
  });
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
        email: form.email.toLowerCase(),
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
        console.log(`LOGIN : FETCHED TOKEN : ${_token}`);
        const _refreshToken = res.data.login.rToken;
        await SecureStore.setItemAsync("TOKEN", _refreshToken);
        setAccessToken(_token);
        _ctx.login(_token);
        console.log(`LOGIN : GLOBAL TOKEN : ${getAccessToken()}`);
      }
    });
  };
  const handleForgotPassword = React.useCallback((url: string) => {
    if (!Linking.canOpenURL(url)) Alert.alert("Cant open URl !");
    else Linking.openURL(url);
  }, []);

  if (!helviticaCondensed) {
    return <ActivityIndicator />;
  }

  return (
    <Center bg={"#1D1D1D"} w={"100%"} flex={1}>
      <Container w={"100%"}>
        <Heading
          textAlign={"center"}
          fontFamily={"helvitica-condesed"}
          color={"white"}
          fontSize={"70px"}
          mb={"10px"}
          w={"100%"}
        >
          LOGIN{" "}
        </Heading>
        {error ? <Error txt={error} close={() => SetError("")} /> : null}
        <Input
          onChange={(val) => handleForm(val, "email")}
          label={"Username"}
        />
        <Input
          //value={form.password}
          onChange={(val) => handleForm(val, "password")}
          password
          label={"Password"}
        />
        <Button txt={"LOGIN"} clicked={() => handleLogin()} />
        <Pressable
          style={{ marginTop: 20 }}
          onPress={() => navigation.push("register")}
        >
          <Text style={{ color: "white" }}>You don't have an account ?</Text>
        </Pressable>
        <Pressable
          style={{ marginTop: 10 }}
          onPress={() =>
            handleForgotPassword(
              "https://vanillefraise.me/request-reset-password"
            )
          }
        >
          <Text style={{ color: "white" }}>Forgot your password ?</Text>
        </Pressable>
      </Container>
    </Center>
  );
};
