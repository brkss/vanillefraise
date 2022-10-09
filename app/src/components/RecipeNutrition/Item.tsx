import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import Convert from "convert-units";

interface Props {
  label: string;
  quantity: number;
  unit: string;
  striped?: boolean;
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
  striped,
}) => {
  const converted = HANDLE_CONVERTION(quantity, unit, label);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: striped ? "#F7F1D7" : "transparent" },
      ]}
    >
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
    //borderWidth: 1,
    //borderBottomWidth: 1,
    //borderBottomColor: "#eee",
    padding: 5,
    paddingTop: 10,
    paddingBottom: 10,
    //marginBottom: 10,
  },
  title: {
    fontFamily: "AvNextBold",
  },
  val: {
    fontFamily: "AvNextBold",
    opacity: 0.6,
  },
});
