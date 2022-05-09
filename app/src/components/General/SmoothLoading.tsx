import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";

const { width: ww, height: hh } = Dimensions.get("window");

interface Props {
  text?: string;
}

export const SmoothLoading: React.FC<Props> = ({ text }) => {
  return <View style={styles.container}>{text && <Text style={styles.txt}>{text}</Text>}</View>;
};

const styles = StyleSheet.create({
  container: {
    zIndex: 999,
    backgroundColor: "white",
    position: "absolute",
    opacity: 0.8,
    top: 0,
    left: 0,
    height: hh,
    width: ww,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
