import React from "react";
import { View, StyleSheet, Text, SafeAreaView, TextInput } from "react-native";

interface Props {
  label: string;
  placeholder: string;
  isPassword?: boolean;
  isNumber ?: boolean;
  onChange: (txt: string) => void;
}

export const BasicInput: React.FC<Props> = ({
  placeholder,
  label,
  isPassword,
  isNumber,
  onChange
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{label}</Text>
      <TextInput
	  	onChangeText={(txt) => onChange(txt)}
        placeholderTextColor="#bababa"
        autoCapitalize={"none"}
        secureTextEntry={isPassword}
        style={styles.input}
        placeholder={placeholder}
        keyboardType={isNumber ? "numeric" : 'default'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "AvNextBold",
    color: "#696868",
  },
  input: {
    padding: 10,
    marginTop: -10,
    paddingLeft: 0,
    backgroundColor: "transparent",
    fontWeight: "bold",
    fontFamily: "AvNextBold",
    fontSize: 25,
  },
});