import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import {
  NutritionIntakeChart,
  NutritionCategoryItems,
  Loading,
} from "../../components";
import { useNutritionCategoryItemsQuery } from "../../generated/graphql";

export const NutritionOverview: React.FC<any> = ({ route }) => {
  const { cat_id, cat_name } = route.params;

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={styles.title}>{cat_name}</Text>
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
          <NutritionIntakeChart />
          <NutritionCategoryItems cat_id={cat_id} />
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
