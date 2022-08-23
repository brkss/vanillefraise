import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const NutritionPlans: React.FC = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.box}>
            <Text style={styles.title}>Nutrition Plans </Text>
            <Text style={styles.subtitle}>
              Apply nutrtion management plans to go micro on certain situations.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
