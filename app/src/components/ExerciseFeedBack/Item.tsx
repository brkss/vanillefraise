import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Item: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>🐝</Text>
      </View>
      <Text style={styles.title}>Low</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  iconContainer: {
    height: 70,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "#EDEAEA",
    marginBottom: 6,
  },
  icon: {
    fontSize: 21,
  },
  title: {
    fontSize: 17,
    fontWeight: "400",
    textAlign: "center",
  },
});
