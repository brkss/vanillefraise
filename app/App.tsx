import { MainNavigation } from "./src/navigation";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { ApolloLink, Observable } from "apollo-link";
import { getAccessToken, setAccessToken, URI } from "./src/utils";
import { TokenRefreshLink } from "apollo-link-token-refresh";
import jwtDecode from "jwt-decode";
import { AuthProvider } from "./src/utils/auth/AuthProvider";
import * as SecureStore from "expo-secure-store";

const cache = new InMemoryCache({});

const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable((observer) => {
      let handle: any;
      Promise.resolve(operation)
        .then((operation) => {
          const token = getAccessToken();
          if (token) {
            operation.setContext({
              headers: {
                authorization: `bearer ${token}`,
              },
            });
          }
        })
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer),
          });
        })
        .catch(observer.error.bind(observer));

      return () => {
        if (handle) handle.unsubscribe();
      };
    })
);

const link: any = new TokenRefreshLink({
  accessTokenField: "accessToken",
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
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <NativeBaseProvider>
          <StatusBar style={"auto"} />
          <MainNavigation />
        </NativeBaseProvider>
      </AuthProvider>
    </ApolloProvider>
  );
}
