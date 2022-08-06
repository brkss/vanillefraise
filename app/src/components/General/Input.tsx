import React from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";

interface Props {
  label: string;
  password?: boolean;
  onChange: (val: string) => void;
}

export const Input: React.FC<Props> = ({ label, password, onChange }) => {
  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize={'none'}
        style={styles.input}
        secureTextEntry={password}
        placeholder={label}
		placeholderTextColor={"#c2c2c2"}
        onChangeText={(val) => onChange(val)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
    fontSize: 12,
  },
  input: {
    padding: 15,
    fontFamily: "helvitica-condesed",
    color: "black",
    borderRadius: 13,
    backgroundColor: "#C0C0C0",
    width: "100%",
  },
});
