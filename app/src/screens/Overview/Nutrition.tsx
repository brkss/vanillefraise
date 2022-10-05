import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

export const NutritionOverview: React.FC = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={styles.title}>Vitamins</Text>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontFamily: "AvNextBold",
    fontSize: 20,
    fontWeight: "bold",
  },
});
