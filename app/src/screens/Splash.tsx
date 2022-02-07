import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Splash: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Splash Screen !</Text>
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
