import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

export const Input: React.FC = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={"Name"} style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#A4B2FF",
    padding: 16,
    borderRadius: 13,
    marginBottom: 10,
  },
  input: {
    width: "100%",
    fontWeight: "bold",
  },
});
