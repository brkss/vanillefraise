import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { fractionConverter } from "../../utils/modules/fraction";

interface Props {
  unit: string;
  amount: string;
  txt: string;
}

const PRESENT_MEASURES = (unit: string, amount: string) => {
  const a = parseFloat(amount);
  const aa =
    a % 1 != 0 && Math.floor(a) == 0 ? fractionConverter(a) : a.toFixed(2);
  return `${a > 0 ? aa + " " : ""}${
    unit?.includes(".") ? "" : unit ? unit : ""
  }`;
};

export const IngredientItem: React.FC<Props> = ({ txt, unit, amount }) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}></View>
      <View style={styles.item}>
        <Text style={styles.measures}>
          {PRESENT_MEASURES(unit, amount)
            ? PRESENT_MEASURES(unit, amount)
            : txt}
        </Text>
        {PRESENT_MEASURES(unit, amount) ? (
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
    marginBottom: 20,
  },
  circle: {
    height: 20,
    width: 20,
    backgroundColor: "#696969",
    //backgroundColor: colors.c2,
    marginRight: 10,
    borderRadius: 20,
  },
  measures: {
    fontSize: 14,
    fontWeight: "700",
    opacity: 0.9,
  },
  txt: {
    fontSize: 12,
    fontWeight: "700",
    opacity: 0.7,
  },
  item: {
    //
  },
});
