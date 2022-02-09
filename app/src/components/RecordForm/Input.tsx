import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export const Input: React.FC = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={"Value"} style={styles.input} />
      <Text style={styles.unit}>g</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#EAEAEA",
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
  },
  input: {
    width: "90%",
    fontSize: 16,
    fontWeight: "bold",
  },
  unit: {
    width: "10%",
    textAlign: "right",
    fontWeight: "bold",
    fontSize: 16,
  },
});
