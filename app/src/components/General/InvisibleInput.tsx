import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";

interface Props {
  label: string;
  txtChange: (v: string) => void;
  secure?: boolean;
  type?: string;
  unit?: string;
}

export const InvisibleInput: React.FC<Props> = ({
  txtChange,
  label,
  type,
  secure,
  unit,
}) => {
  return (
    <View
      style={[styles.container, { flexDirection: unit ? "row" : "column" }]}
    >
      <TextInput
        secureTextEntry={secure}
        textContentType={(type as any) || "none"}
        placeholder={label}
        onChangeText={(t) => txtChange(t)}
        style={[styles.input, { width: unit ? "80%" : "100%" }]}
      />
      {unit ? (
        <Text style={[styles.unit, { width: "20%" }]}>{unit}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  input: {
    fontFamily: "helvitica-condesed",
    fontSize: 31,
  },
  unit: {
    fontSize: 31,
    opacity: 0.7,
    fontFamily: "helvitica-condesed",
  },
});
