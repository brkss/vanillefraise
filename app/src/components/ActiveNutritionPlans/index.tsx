import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { ActiveNutritionPlanItem } from "./Item";

export const ActiveNutritionPlan: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Active Management Plans</Text>
      <View style={styles.box}>
        <ActiveNutritionPlanItem />
        <ActiveNutritionPlanItem />
        <ActiveNutritionPlanItem />
        <ActiveNutritionPlanItem />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  title: {
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  box: {
    marginTop: 0,
  },
});
