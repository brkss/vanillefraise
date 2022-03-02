import React from "react";
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from "react-native";
import { Heading, RecipeNutritionItem } from "../../components";

export const RecipeNutrition: React.FC = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Heading title={"Nutrition Facts"} />
        <ScrollView>
          <RecipeNutritionItem />
          <RecipeNutritionItem />
          <RecipeNutritionItem />
          <RecipeNutritionItem />
          <RecipeNutritionItem />
          <RecipeNutritionItem />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
