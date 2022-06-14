import React from "react";
import { View, Text, StyleSheet } from "react-native";

const tmp = [
  {
    name: "Fat",
    value: 45,
    color: "#FF9C9C",
  },
  {
    name: "Protein",
    value: 20,
    color: "#F6B1B1",
  },
  {
    name: "Carbs",
    value: 35,
    color: "#FFD9D9",
  },
];

export const MacronutrientBar: React.FC = () => {
  return (
    <View style={styles.container}>
      {tmp.map((mn, key) => (
        <View style={[styles.barContainer, { width: `${mn.value}%` }]}>
          <Text style={styles.label}>{mn.name}</Text>
          <View style={[styles.bar, { backgroundColor: `${mn.color}` }]} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  barContainer: {
    paddingRight: 5,
  },
  label: {
    fontWeight: "bold",
  },
  bar: {
    width: "100%",
    height: 15,
    borderRadius: 50,
    backgroundColor: "red",
  },
});
