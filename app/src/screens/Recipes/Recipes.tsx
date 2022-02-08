import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Heading, Slider, RecipeThumbnail } from "../../components";

export const Recipes: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Heading title={"Recipes"} />
      </View>
      <View style={styles.sliderContainer}>
        <Slider />
      </View>
      <View style={styles.recipesContainer}>
        <RecipeThumbnail />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  headingContainer: {
    flex: 0.15,
  },
  sliderContainer: {
    flex: 0.15,
  },
  recipesContainer: {
    flex: 0.7,
  },
});
