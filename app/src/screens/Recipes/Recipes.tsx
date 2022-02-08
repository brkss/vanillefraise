import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Heading } from "../../components";
import { Slider } from "../../components";

export const Recipes: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Heading title={"Recipes"} />
      </View>
      <View style={styles.sliderContainer}>
        <Slider />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingContainer: {
    flex: 0.17,
  },
  sliderContainer: {
    flex: 0.15,
  },
});
