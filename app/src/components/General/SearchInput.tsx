import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

interface Props {
  change: (v: string) => void;
}

export const SearchInput: React.FC<Props> = ({ change }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(v) => change(v)}
        placeholder={"Search (title, nutritient, ingredient)..."}
        placeholderTextColor={"#c2c2c2"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#EBEBEB",
    fontWeight: "bold",
    padding: 18,
    borderRadius: 10,
    fontFamily: "AvNextBold",
  },
});
