import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import Convert from "convert-units";

interface Props {
  label: string;
  quantity: number;
  unit: string;
}

const HANDLE_CONVERTION = (quantity: number, unit: string, label: string) => {
  let converted = { unit: unit, val: quantity };

  if (unit === "mg" || unit === "µg") {
    converted = Convert(quantity)
      .from(unit === "mg" ? "mg" : "mcg")
      .toBest();
    return {
      unit: converted.unit === "mcg" ? "µg" : converted.unit,
      val: converted.val.toFixed(2),
    };
  }
  return converted;
};

export const RecipeNutritionItem: React.FC<Props> = ({
  label,
  quantity,
  unit,
}) => {
  const converted = HANDLE_CONVERTION(quantity, unit, label);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.row}>
        <Text style={styles.quantity}> {converted.val}</Text>
        <Text style={styles.unit}>{converted.unit}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //borderWidth: 1,
    padding: 17,
    backgroundColor: colors.c3,
    //backgroundColor: "#D8D8D8",
    marginRight: 15,
    borderRadius: 14,
    minHeight: 100,
    minWidth: 150,
    alignItems: "baseline",
    justifyContent: "flex-end",
  },
  row: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  quantity: {
    marginLeft: -5,
    fontSize: 27,
    fontWeight: "bold",
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
  },
  unit: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: "bold",
  },
});
