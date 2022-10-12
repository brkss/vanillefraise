import React from "react";
import { View } from "react-native";
import { MainNavigation } from "./src/navigation";
import { NativeBaseProvider } from "native-base";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { ApolloLink } from "apollo-link";
import { getAccessToken, setAccessToken, URI } from "./src/utils";
import { TokenRefreshLink } from "apollo-link-token-refresh";
import jwtDecode from "jwt-decode";
import { AuthProvider } from "./src/utils/auth/AuthProvider";
import * as SecureStore from "expo-secure-store";
import * as Network from "expo-network";
import { NotConnected } from "./src/screens";
import { StatusBar } from "expo-status-bar";
import { MealScheduleNotification } from "./src/utils/modules/notifications";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const cache = new InMemoryCache({});

const requestLink = new ApolloLink((operation, forward) => {
  const token = getAccessToken();
  if (token)
    operation.setContext({
      headers: {
        authorization: `bearer ${token}`,
      },
    });
  return forward(operation);
});

const link: any = new TokenRefreshLink({
  accessTokenField: "token",
  isTokenValidOrUndefined: () => {
    const token = getAccessToken();
    if (!token) return true;
    try {
      const { exp } = jwtDecode(token) as any;
      if (Date.now() >= exp * 1000) {
        return false;
      }
      return true;
    } catch {
      return false;
    }
  },
  fetchAccessToken: async () => {
    return fetch(`${URI}/refresh_token`, {
      method: "POST",
      headers: new Headers({
        "r-token": (await SecureStore.getItemAsync("TOKEN")) || "",
      }),
    });
  },
  handleFetch: (accessToken) => {
    setAccessToken(accessToken);
  },
  handleError: (err) => {
    console.warn("Your refresh token is invalid. Try to relogin");
    console.error(err);
  },
});

const client: any = new ApolloClient({
  link: ApolloLink.from([
    link,
    onError(({ graphQLErrors, networkError }) => {
      console.log(graphQLErrors);
      console.log(networkError);
    }),
    requestLink,
    new HttpLink({
      uri: `${URI}/graphql`,
      credentials: "include",
    }),
  ]),
  cache,
});

export default function App() {
  const [isConnected, setIsConnected] = React.useState(false);
  React.useEffect(() => {
    (async () => {
      const state = await Network.getNetworkStateAsync();
      setIsConnected(state.isConnected);
    })();
  });

  const [avNext] = useFonts({
    AvNextBold: require("./src/assets/fonts/AvenirNextLTPro-Bold.otf"),
    AvNextIt: require("./src/assets/fonts/AvenirNextLTPro-It.otf"),
    AvNext: require("./src/assets/fonts/AvenirNextLTPro-Regular.otf"),
  });

  React.useEffect(() => {
    (async () => {
      await SplashScreen.preventAutoHideAsync();
    })();
  }, []);

  const onLayoutRootView = React.useCallback(async () => {
    if (avNext) await SplashScreen.hideAsync();
  }, [avNext]);

  if (!avNext) return null;

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      {!isConnected && false ? (
        <NotConnected />
      ) : (
        <ApolloProvider client={client}>
          <StatusBar style={"dark"} />
          <AuthProvider reset={async () => await cache.reset()}>
            <NativeBaseProvider>
              <MealScheduleNotification />
              <MainNavigation />
            </NativeBaseProvider>
          </AuthProvider>
        </ApolloProvider>
      )}
    </View>
  );
}
