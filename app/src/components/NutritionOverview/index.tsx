import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NutrientItem } from "./Item";

const nutrients = [
  {
    title: "Vitamin E (alpha-tocopherol)",
    unit: "mg",
    value: 402,
  },
  {
    title: "Vitamin D (D2 + D3)",
    unit: "µg",
    value: 30,
  },
  {
    title: "Carbohydrate, by difference",
    unit: "g",
    value: 600,
  },
  {
    title: "Zinc, Zn",
    unit: "mg",
    value: 50,
  },
];

export const NutritionOverview: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>About your nutrition</Text>
      <Text>Last 10 Days</Text>
      <Text style={styles.info}>
        nutrition counted here is sum of nutrition related to recipes you cooked
        in recipes section.
      </Text>
      <View style={styles.row}>
        {nutrients.map((n, key) => (
          <View style={styles.item} key={key}>
            <NutrientItem value={n.value} unit={n.unit} title={n.title} />
          </View>
        ))}
      </View>
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
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    //alignItems: "baseline",
    flexWrap: "wrap",
  },
  item: {
    width: "50%",
    padding: 5,
    height: 100,
  },
});
