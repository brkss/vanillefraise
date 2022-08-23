import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const NutritionOverview: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>nutrition overview</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //
    flex: 1,
  },
});
