import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

interface Props {
  onChange: (value: string) => void;
  unit: string;
  value: string;
}

export const Input: React.FC<Props> = ({ value, onChange, unit }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={"Value"}
        onChangeText={(v) => onChange(v)}
        style={styles.input}
        value={value}
      />
      <Text style={styles.unit}>{unit}</Text>
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
    width: "80%",
    fontSize: 16,
    fontWeight: "bold",
  },
  unit: {
    width: "20%",
    textAlign: "right",
    fontWeight: "bold",
    fontSize: 16,
  },
});
