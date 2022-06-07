import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export const NextButton: React.FC = () => {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.txt}>NEXT</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 120,
    backgroundColor: "#363636",
    borderRadius: 50,
    alignSelf: "flex-end",
    padding: 10,
    paddingHorizontal: 20,
  },
  txt: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    textAlign: "right",
  },
});
