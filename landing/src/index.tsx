import React from "react";
import ReactDOM from "react-dom";
import { Application } from "./Application";
import { ChakraProvider } from "@chakra-ui/react";
import { ApolloClient, InMemoryCache, ApolloLink} from "@apollo/client";
import { HttpLink } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { onError } from "apollo-link-error";
import { URL } from './utils/config/default';

const client: any = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      console.log(graphQLErrors);
      console.log(networkError);
    }) as any,
    new HttpLink({
      uri: URL,
    }),
  ]),
  cache: new InMemoryCache(),
});

//console.log("client : ", client);

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
