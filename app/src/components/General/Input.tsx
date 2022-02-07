import React from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";

interface Props {
  label: string;
  password?: boolean;
}

export const Input: React.FC<Props> = ({ label, password }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={password}
        placeholder={label}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  label: {
    fontWeight: "bold",
    fontSize: 12,
  },
  input: {
    padding: 4,
  },
});
