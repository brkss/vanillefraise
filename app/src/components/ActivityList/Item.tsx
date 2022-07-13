import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const Item: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🏄</Text>
      <Text style={styles.title}>Surfing</Text>
      <Text style={styles.date}>09/07/2022 19:03</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#DEE5FF",
    borderRadius: 14,
  },
  icon: {
    fontSize: 50,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    opacity: 0.8,
    marginBottom: 10,
  },
  date: {
    fontSize: 12,
    opacity: 0.8,
  },
});
