import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useFonts } from "expo-font";

export const IngredientStep: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        You'll need these following ingredients for your recipes
      </Text>
      <Text style={styles.hint}>press ant ingredient you’ve prepared !</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {},
  hint: {},
});
