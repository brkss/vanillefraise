import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

export const ActiveNutritionPlanItem: React.FC = () => {
  return (
    <ImageBackground
    source={require("../../assets/hair.jpeg")}
      style={styles.container}
    >
      <Text style={styles.txt}>Healthy Skin</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
  },
  txt: {
    //
  },
});
