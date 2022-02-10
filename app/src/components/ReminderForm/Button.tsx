import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export const Button: React.FC = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.txt}>Save</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 14,
    borderRadius: 13,
    backgroundColor: "#0604BA",
  },
  txt: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    fontFamily: "helvitica-condesed",
  },
});
