import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface Props {
  txt: string;
  clicked: () => void;
}

export const Button: React.FC<Props> = ({ txt, clicked }) => {
  return (
    <Pressable style={styles.container} onPress={clicked}>
      <Text style={styles.txt}>{txt}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical:15,
    backgroundColor: "#FFD9D9",
    borderRadius: 10,
    marginTop: 7,
  },
  txt: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 17,
	fontFamily: "AvNextBold",
    color: "#434343",
  },
});
