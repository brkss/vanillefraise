import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  txt: string;
}

export const IngredientItem: React.FC<Props> = ({ txt }) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}></View>
      <Text style={styles.txt}>{txt}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  circle: {
    height: 30,
    width: 30,
    backgroundColor: "#d0cece",
    marginRight: 10,
    borderRadius: 11,
  },
  txt: {
    fontSize: 14,
    fontWeight: "700",
    opacity: 0.7,
  },
});
