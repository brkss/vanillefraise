import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

export const ActiveNutritionPlanItem: React.FC = () => {
  return (
    <ImageBackground
      source={require("../../assets/hair.jpeg")}
      style={styles.container}
    >
      <View style={styles.shadow} />
      <Text style={styles.txt}>Healthy Skin</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
    marginBottom: 5,
  },
  shadow: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    opacity: 0.3,
  },
  txt: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    position: "absolute",
    bottom: 10,
    left: 10,
  },
});
