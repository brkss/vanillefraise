import React, { Children } from "react";
import { getAccessToken } from "../token/token";
import * as SecureStore from "expo-secure-store";

type IToken = null | string;

export const AuthContext = React.createContext<{
  token: IToken;
  login: (_token: string) => void;
  logout: () => Promise<void>;
}>({
  token: null,
  login: () => {},
  logout: async () => {},
});

export const AuthProvider: React.FC = ({ children }) => {
  const [token, SetToken] = React.useState<IToken>(null);

  return (
    <AuthContext.Provider
      value={{
        token,
        login: (_token) => {
          SetToken(_token);
          console.log("SETUP TOKEN ON CONTEXT !");
        },
        logout: async () => {
          SetToken(null);
          await SecureStore.deleteItemAsync("TOKEN");
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
