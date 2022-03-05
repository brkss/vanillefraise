import React from "react";
import { View, StyleSheet } from "react-native";

export const LoadingBar: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.bar, { width: "88%" }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    marginVertical: 10,
  },
  bar: {
    height: 20,
    backgroundColor: "#C0E6D8",
    borderRadius: 70,
  },
});
