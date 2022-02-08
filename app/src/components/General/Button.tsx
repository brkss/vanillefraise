import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface Props {
  txt: string;
}

export const Button: React.FC<Props> = ({ txt }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.txt}>{txt}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#323232",
    width: "100%",
    marginTop: 10,
    padding: 10,
    borderRadius: 13,
  },
  txt: {
    textAlign: "center",
    color: "white",
    fontFamily: "helvitica-condesed",
    fontSize: 20,
    marginBottom: 5,
  },
});
