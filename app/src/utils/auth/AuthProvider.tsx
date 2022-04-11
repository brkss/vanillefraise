import React from "react";
import * as SecureStore from "expo-secure-store";
import * as Update from "expo-updates";
import useState from "react-usestateref";
import { setAccessToken } from "../token/token";

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
  const [token, SetToken, ref] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        token: ref.current,
        login: (_token) => {
          SetToken(_token);
          setAccessToken(_token);
        },
        logout: async () => {
          setAccessToken("");
          SetToken("");
          await SecureStore.setItemAsync("TOKEN", "");
          await Update.reloadAsync();
          //const val = await SecureStore.getItemAsync("TOKEN");
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
