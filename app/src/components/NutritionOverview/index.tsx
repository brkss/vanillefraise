import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const NutritionOverview: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>About your nutrition</Text>
      <Text>Last 10 Days</Text>
      <Text style={styles.info}>
        nutrition counted here is sum of nutrition related to recipes you cooked
        in recipes section.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
  },
  info: {
    fontSize: 13,
    fontWeight: "400",
    color: "#434343",
  },
});
