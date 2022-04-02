import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

export const SearchInput: React.FC = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder={"Search..."} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#EBEBEB",
    fontWeight: "bold",
    padding: 18,
    borderRadius: 10,
  },
});
