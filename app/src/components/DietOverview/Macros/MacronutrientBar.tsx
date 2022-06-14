import React from "react";
import { View, Text, StyleSheet } from "react-native";

const tmp = [
  {
    name: "Fat",
    value: 45,
    color: '#3C3B3B'
  },
  {
    name: "Protein",
    value: 20,
    color: "#878585",
  },
  {
    name: "Carbs",
    value: 35,
    color: "#D8D8D8"
  },
];

export const MacronutrientBar: React.FC = () => {
  return (
    <View style={styles.container}>
      {tmp.map((mn, key) => (
        <View style={[styles.barContainer, { width: `${mn.value}%` }]}>
          <Text style={styles.label}>{mn.name}</Text>
          <View style={[styles.bar, {backgroundColor: `${mn.color}`}]} />
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
   fontWeight: 'bold' 
  },
  bar: {
    width: "100%",
    height: 15,
    borderRadius: 50,
    backgroundColor: "red",
  },
});
