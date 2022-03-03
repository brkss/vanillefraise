import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  label: string;
  quantity: number;
  unit: string;
}

export const RecipeNutritionItem: React.FC<Props> = ({
  label,
  quantity,
  unit,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.row}>
        <Text style={styles.quantity}>{quantity.toFixed(2)}</Text>
        <Text style={styles.unit}>{unit}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 17,
    backgroundColor: "#D8D8D8",
    marginRight: 15,
    borderRadius: 14,
    minHeight: 100,
    minWidth: 130,
    alignItems: "baseline",
    justifyContent: "flex-end",
  },
  row: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  quantity: {
    fontSize: 27,
    fontWeight: "bold",
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
  },
  unit: {
    fontSize: 12,
    fontWeight: "bold",
  },
});
