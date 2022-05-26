import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Info: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        No Nutrients Overview ! {"\n"}Please Select Recipes For This Meal.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 20,
    backgroundColor: "#ebebeb",
    borderRadius: 14,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
