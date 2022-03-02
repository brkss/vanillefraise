import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { RecipeNutritionItem } from "./Item";

export const RecipeNutrition: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Nutrition Facts</Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        <RecipeNutritionItem
          label={"Vitamin C, total ascorbic acid"}
          quantity={82.05}
          unit={"mg"}
        />
        <RecipeNutritionItem
          label={"Vitamin C, total ascorbic acid"}
          quantity={82.05}
          unit={"mg"}
        />
        <RecipeNutritionItem
          label={"Vitamin C, total ascorbic acid"}
          quantity={82.05}
          unit={"mg"}
        />
        <RecipeNutritionItem
          label={"Vitamin C, total ascorbic acid"}
          quantity={82.05}
          unit={"mg"}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //padding: 10,
    borderRadius: 13,
    minHeight: 100,
    justifyContent: "center",
    marginTop: 20,
  },
  label: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#1F1F1F",
  },
  quantity: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#1F1F1F",
  },
  unit: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#1F1F1F",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
