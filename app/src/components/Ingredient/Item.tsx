import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { fractionConverter } from "../../utils/modules/fraction";
import convert, { Convert } from "convert-units";

interface Props {
  unit: string;
  amount: string;
  txt: string;
  originUnit: string;
}

const CHECK_UNIT = (unit: string, translatedUnit: string) => {
  if (unit && (unit.toLowerCase() === "pound" || unit.toLowerCase() === "lb"))
    return "kg";
  return translatedUnit;
};

const PRESENT_MEASURES = (unit: string, amount: string, originUnit: string) => {
  let a = parseFloat(amount);
  if (unit && (unit.toLowerCase() === "pound" || unit.toLowerCase() === "lb"))
    a = convert(a).from("lb").to("kg");
  const aa =
    a % 1 != 0 && Math.floor(a) == 0
      ? fractionConverter(a)
      : Math.round(a * 100) / 100;
  return `${a > 0 ? aa + " " : ""}${
    unit?.includes(".")
      ? ""
      : CHECK_UNIT(originUnit, unit)
      ? CHECK_UNIT(originUnit, unit)
      : ""
  }`;
};

export const IngredientItem: React.FC<Props> = ({
  txt,
  unit,
  amount,
  originUnit,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}></View>
      <View style={styles.item}>
        <Text style={styles.measures}>
          {PRESENT_MEASURES(unit, amount, originUnit)
            ? PRESENT_MEASURES(unit, amount, originUnit)
            : txt}
        </Text>
        {PRESENT_MEASURES(unit, amount, originUnit) ? (
          <Text style={styles.txt}>{txt}</Text>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },
  circle: {
    height: 25,
    width: 5,
    backgroundColor: "#696969",
    //backgroundColor: colors.c2,
    marginRight: 10,
    borderRadius: 20,
  },
  measures: {
    fontSize: 15,
    fontWeight: "700",
    opacity: 0.9,
    fontFamily: "AvNextBold",
    lineHeight: 16,
  },
  txt: {
    fontSize: 14,
    fontWeight: "700",
    opacity: 0.7,
    fontFamily: "AvNextBold",
  },
  item: {
    //
  },
});
