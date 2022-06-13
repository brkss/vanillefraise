import React from "react";
import { View, Text, StyleSheet } from "react-native";

const tmp = [
  {
    name: "Fat",
    value: 45,
  },
  {
    name: "Protein",
    value: 20,
  },
  {
    name: "Carbs",
    value: 35,
  },
];

export const MacronutrientBar: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.barContainer}>
        <Text style={styles.label}>d</Text>
        <View style={styles.bar} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  barContainer: {
    //
  },
  label: {
    //
  },
  bar: {
    width: "100%",
    borderRadius: 50,
  },
});
