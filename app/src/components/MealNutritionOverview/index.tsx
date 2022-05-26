import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Item } from "./Item";

export const MealNutritionOverview: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nutrition Overview</Text>
      <Item label={"Protein"} quantity={42} />
      <Item label={"Protein"} quantity={22} />
      <Item label={"Protein"} quantity={32} />
      <Item label={"Protein"} quantity={12} />
      <Item label={"Protein"} quantity={9} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // padd
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  barContainer: {
    paddingVertical: 10,
    flexDirection: "row",
    //fontSize: 10,
  },
  bar: {
    height: 20,
    backgroundColor: "blue",
    width: "10%",
    borderRadius: 10,
  },
});
