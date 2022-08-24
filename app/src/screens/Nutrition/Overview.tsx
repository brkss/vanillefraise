import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NutritionChart, NutritionOverviewSlider } from '../../components';


export const NutritionOverview: React.FC = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.box}>
          <Text style={styles.title}>Nutrition Overview</Text>
          <Text style={styles.subtitle}>
            Close overview to your nutrition intake.
          </Text>
          <NutritionOverviewSlider />
          <NutritionChart />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //
    flex: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    color: "#6B6B6B",
  },
  box: {
    padding: 15,
  },
});
