import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

interface Props {
  label: string;
  txtChange: (v: string) => void;
  secure?: boolean;
  type?: string;
}

export const InvisibleInput: React.FC<Props> = ({
  txtChange,
  label,
  type,
  secure,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        secureTextEntry={secure}
        textContentType={(type as any) || "none"}
        placeholder={label}
        onChangeText={(t) => txtChange(t)}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  input: {
    fontFamily: "helvitica-condesed",
    fontSize: 31,
  },
});
