import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Info } from "./Info";

export const RecipeMetaData: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Spicy Tempeh Crumble Bowl </Text>
      <Info />
      <Text style={styles.description}>
        Simmered with French onion soup in a slow cooker, these seasoned pork
        chops make an easy dinner that's sure to please.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    opacity: 0.8,
    marginTop: 10,
  },
});
