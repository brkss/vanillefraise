import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { Application } from "./Application";
import { ChakraProvider } from "@chakra-ui/react";
//import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { URI } from "./utils/config/defaults";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import { onError } from "apollo-link-error";
import { ApolloLink } from "apollo-link";
import { TokenRefreshLink } from "apollo-link-token-refresh";
import jwtDecode from "jwt-decode";
import { getToken, setToken } from "./utils/token/token";
import { HttpLink } from "apollo-link-http";

const cache = new InMemoryCache({});

const requestLink = new ApolloLink(
  (operation, forward) => {
    const token = getToken();
    if (token)
      operation.setContext({
        headers: {
          authorization: `bearer ${token}`,
        },
      });
    return forward(operation);
  }
  /*
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
      })*/
);

const link: any = new TokenRefreshLink({
  accessTokenField: "token",
  isTokenValidOrUndefined: () => {
    const token = getToken();
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
    return fetch(`${URI}/refresh_admin_token`, {
      method: "POST",
      credentials: "include",
    });
  },
  handleFetch: (accessToken) => {
    setToken(accessToken);
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

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client as any}>
      <ChakraProvider>
        <Application />
      </ChakraProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
