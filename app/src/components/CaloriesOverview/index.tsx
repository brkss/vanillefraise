import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const CaloriesOverview: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.caloriesContainer}>
        <Text style={styles.takenCalories}>1402</Text>
        <Text style={styles.needCalories}> / 2400</Text>
      </View>
      <Text style={styles.unit}>calories</Text>
      <Text style={styles.recipeCooked}>You cooked 2 recipes till now.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  },
  caloriesContainer: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  takenCalories: {
    fontSize: 60,
    fontWeight: "bold",
    fontFamily: "helvitica-condesed",
  },
  needCalories: {
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: "helvitica-condesed",
  },
  unit: {
    marginTop: -10,
    fontSize: 26,
    fontFamily: "helvitica-condesed",
    opacity: 0.7,
  },
  recipeCooked: {
    fontSize: 18,
    fontWeight: "400",
    color: "#434343",
  },
});
