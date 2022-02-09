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
  container: {},
  input: {
    width: "80%",
  },
  unit: {
    width: "20%",
  },
});
