import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "native-base";
import { AuthContext } from "../utils/auth/AuthProvider";

export const Home: React.FC = () => {
  const { logout } = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>This Home </Text>
      <Button colorScheme={"dark"} onPress={async () => await logout()}>
        LOGOUT
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
