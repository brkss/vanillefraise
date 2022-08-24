import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NutritionCategories } from "./Categories";
import { NutritionSubCategories } from "./SubCategories";

export const NutritionOverviewSlider: React.FC = () => {
  return (
    <View style={styles.container}>
      <NutritionCategories />
      <NutritionSubCategories />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   marginTop: 10 
  },
});
