import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Info: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.title}>Prep</Text>
        <Text style={styles.value}>1 hour</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>Cook</Text>
        <Text style={styles.value}>18 min</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>Carbs</Text>
        <Text style={styles.value}>200g</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 10,
  },
  item: {
    width: "30%",
    alignItems: "flex-start",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  value: {
    fontSize: 14,
  },
});
