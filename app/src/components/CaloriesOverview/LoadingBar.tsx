import React from "react";
import { View, StyleSheet } from "react-native";

interface Props {
  progress: number;
}

export const LoadingBar: React.FC<Props> = ({ progress }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.bar, { width: `${progress}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    marginVertical: 10,
    backgroundColor: "#D6D4D4",
    borderRadius: 70,
    borderWidth: 1,

  },
  bar: {
    height: 20,
    backgroundColor: "#C0E6D8",
    borderRadius: 70,
  },
});
