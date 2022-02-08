import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <RecipeThumbnail />
          <RecipeThumbnail />
          <RecipeThumbnail />
          <RecipeThumbnail />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingBottom: 0,
  },
  headingContainer: {
    flex: 0.14,
  },
  sliderContainer: {
    flex: 0.14,
  },
  recipesContainer: {
    flex: 0.72,
  },
});
