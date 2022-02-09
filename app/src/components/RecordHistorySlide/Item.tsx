import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export const Item: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🥗</Text>
      <Text style={styles.title}>Carbs</Text>
      <Text style={styles.value}>200 g</Text>
      <Text style={styles.time}>Feb 9, 2022</Text>
      <Ionicons size={16} name={"ios-eye-outline"} style={styles.view} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    borderRadius: 15,
    padding: 15,
    backgroundColor: "#D8F2D6",
    height: 124,
    width: 153,
  },
  icon: {
    fontSize: 31,
  },
  title: {
    fontSize: 13,
    fontWeight: "bold",
    opacity: 0.9,
  },
  value: {
    fontWeight: "bold",
    fontSize: 22,
    opacity: 0.9,
  },
  time: {
    marginTop: 5,
    fontWeight: "bold",
    fontSize: 9,
    opacity: 0.8,
  },
  view: {
    position: "absolute",
    top: 15,
    right: 15,
  },
});
