import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigation } from "./AppNavigation";
import { AuthNavigation } from "./AuthNavigation";
import { AuthContext } from "../utils/auth/AuthProvider";
import * as SecureStore from "expo-secure-store";
import { Spinner, Center } from "native-base";
import { URI } from "../utils";
import { setAccessToken } from "../utils/token/token";
import { OverviewNavigation } from "./OverviewNavigation";

export const MainNavigation: React.FC = () => {
  const { token, login } = React.useContext(AuthContext);
  const [loading, SetLoading] = React.useState(true);

  // refresh token
  React.useEffect(() => {
    {
      token ? (
        <>
          <AppNavigation />
          <OverviewNavigation />
        </>
      ) : (
        <AuthNavigation />
      );
    }
    SecureStore.getItemAsync("TOKEN")
      .then(async (_token) => {
        console.log("fetch new access token : ", _token);
        if (_token) {
          console.log("GOT REFRESH TOKEN !");
          // fetch access token;
          const resp = await fetch(`${URI}/refresh_token`, {
            method: "POST",
            headers: new Headers({
              "r-token": _token,
            }),
          });
          const data = await resp.json();
          if (data.status == true) {
            setAccessToken(data.token);
            login(data.token);
          }
        }
        SetLoading(false);
      })
      .catch((e) => {
        console.log("Something went wrong !", e);
        SetLoading(false);
      });
  }, [token]);

  if (loading) {
    return (
      <Center flex={1}>
        <Spinner color={"gray"} />
      </Center>
    );
  }

  return (
    <>
      <NavigationContainer>
        {token ? (
          <>
            <AppNavigation />
          </>
        ) : (
          <AuthNavigation />
        )}
      </NavigationContainer>
    </>
  );
};
