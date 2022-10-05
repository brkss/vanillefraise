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
      <Text style={styles.title}>{label}</Text>
      <Text style={styles.val}>
        {converted.val} {converted.unit}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  title: {
    fontFamily: "AvNextBold",
  },
  val: {
    fontFamily: "AvNextBold",
    opacity: 0.6,
  },
});
