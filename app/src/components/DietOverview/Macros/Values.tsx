import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const MacrosValuesOverview: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TDEE</Text>
      <Text style={styles.subtitle}>total daily energy expenditure</Text>
      <View style={{ flexDirection: "row", alignItems: "baseline" }}>
        <Text style={styles.value}>2093</Text>
        <Text style={styles.unit}>cal</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  value: {
    fontSize: 40,
    fontWeight: "bold",
  },
  unit: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 4,
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "bold",
    opacity: 0.8,
    marginBottom: 5,
  },
});
