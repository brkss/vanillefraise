import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const DietAnalyse: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Track, Analyze and Adjust</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
