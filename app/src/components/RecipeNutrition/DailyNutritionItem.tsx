import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  label: string;
  unit: string;
  quantity: number;
}

export const DailyNutritionItem: React.FC<Props> = ({
  label,
  quantity,
  unit,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.row}>
        <Text style={styles.quantity}>{quantity} </Text>
        <Text style={styles.unit}>{unit}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5EBE0",
    marginRight: 10,
    padding: 10,
    minWidth: 100,
    borderRadius: 12,
  },
  label: {
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
  },
  quantity: {
    //
  },
  unit: {
    //
  },
});
