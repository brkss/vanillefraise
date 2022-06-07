import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

interface Props {
  pressed: () => void;
}

export const NextButton: React.FC<Props> = ({ pressed }) => {
  return (
    <Pressable style={styles.container} onPress={pressed}>
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
