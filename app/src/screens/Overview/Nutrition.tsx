import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { NutritionIntakeChart, NutritionCategoryItems } from "../../components";

export const NutritionOverview: React.FC = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={styles.title}>Vitamins</Text>
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
          <NutritionIntakeChart />
          <NutritionCategoryItems />
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
  title: {
    fontFamily: "AvNextBold",
    fontSize: 30,
    fontWeight: "bold",
  },
});
