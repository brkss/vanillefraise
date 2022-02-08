import React from "react";
import { ImageBackground, Text, StyleSheet, View } from "react-native";

export const RecipeThumbnail: React.FC = () => {
  return (
    <ImageBackground
      source={{
        uri: "https://images.101cookbooks.com/CITRUS-RECIPES-2020-h.jpg?w=680&auto=format",
      }}
      imageStyle={{ borderRadius: 13 }}
      style={styles.container}
    >
      <View style={styles.shadow} />
      <Text style={styles.title}>Sunny Citrus</Text>
      <Text style={styles.time}>about 1 hr to make.</Text>
      <Text style={styles.carbs}>120g of carbs</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 175,
    width: "100%",
  },
  shadow: {
    height: 175,
    width: "100%",
    backgroundColor: "black",
    borderRadius: 13,
    opacity: 0.4,
  },
  title: {
    position: "absolute",
    bottom: 10,
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
    left: 10,
  },
  time: {
    fontSize: 13,
    fontWeight: "bold",
    color: "white",
    position: "absolute",
    top: 10,
    left: 10,
  },
  carbs: {
    fontSize: 13,
    fontWeight: "bold",
    color: "white",
    position: "absolute",
    top: 10,
    right: 10,
  },
});
