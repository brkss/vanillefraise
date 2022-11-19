import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const NutritionPlanAlert: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alert</Text>
      <Text style={styles.message}>
        Be careful ! some limits should not be exceeded without your doctor
        approval, it is unlikely to get nutritional toxicities from food however
        the case may differ if you're on some dietary supplements.{" "}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 18,
    backgroundColor: "#FFF3DF",
  },
  title: {
    fontWeight: "bold",
    fontFamily: "AvNextBold",
    fontSize: 20,
    color: "#434343",
    display: "none",
  },
  message: {
    marginTop: 5,
    //fontFamily: "AvNextBold",
    fontSize: 15,
    //fontWeight: "bold",
    color: "#434343",
    fontWeight: "600",
    opacity: 0.8,
  },
});
