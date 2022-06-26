import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const EmailVerification: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Welcome To The Party 🎉</Text>
      <Text style={styles.subtxt}>
        Please verify your email ! unverified accounts will be automatically
        suspended.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 50,
    backgroundColor: "#FFDB47",
  },
  txt: {
    fontWeight: "bold",
  },
  subtxt: {
    opacity: 0.7,
    fontSize: 14,
    marginTop: 4,
  },
});
