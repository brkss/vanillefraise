import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MacronutrientBar } from "./MacronutrientBar";
import { MacrosValuesOverview } from "./Values";
marginVertical: 5;
export const DietMacrosOverview: React.FC = () => {
  return (
    <View style={styles.container}>
      <MacrosValuesOverview />
      <View style={styles.macronutrients}>
        <View style={styles.line} />
        <MacronutrientBar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //
  },
  macronutrients: {
    marginBottom: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 7,
  },
  line: {
    borderTopColor: "#434343",
    borderTopWidth: 1,
    marginBottom: 15,
    opacity: 0.7,
  },
});