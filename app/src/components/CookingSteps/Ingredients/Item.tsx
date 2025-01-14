import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { fractionConverter } from "../../../utils/modules/fraction";

interface Props {
  txt: string;
  amount: string;
  unit: string;
}

const PRESENT_MEASURES = (unit: string, amount: string) => {
  const a = parseFloat(amount);
  const aa = a % 1 != 0 && Math.floor(a) == 0 ? fractionConverter(a) : a;
  return `${a > 0 ? aa + " " : ""}${
    unit?.includes(".") ? "" : unit ? unit : ""
  }`;
};

export const Item: React.FC<Props> = ({ txt, unit, amount }) => {
  const [checked, SetChecked] = React.useState(false);
  return (
    <Pressable style={styles.container} onPress={() => SetChecked(!checked)}>
      <View
        style={[
          styles.check,
          { backgroundColor: checked ? "#7fba75" : "#343433" },
        ]}
      ></View>
      <Text
        style={[
          styles.txt,
          {
            textDecorationLine: checked ? "line-through" : "none",
            fontWeight: unit && amount ? "500" : "bold",
          },
        ]}
      >
        {txt}
      </Text>
      <Text
        style={[
          styles.txt,
          {
            textAlign: "right",
            opacity: 0.7,
            textDecorationLine: checked ? "line-through" : "none",
            display: unit && amount ? "flex" : "none",
          },
        ]}
      >
        {PRESENT_MEASURES(unit, amount)}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    //borderTopColor: "#434343",
    //borderTopWidth: 1,
    marginBottom: 10,
    paddingTop: 15,
    flexDirection: "row",
    //justifyContent: "center",
    alignItems: "center",
  },
  check: {
    height: 20,
    width: 20,
    borderRadius: 7,
    marginRight: 10,
    backgroundColor: "#343433",
  },
  txt: {
    flexShrink: 1,
    fontSize: 17,
    fontWeight: "bold",
    fontFamily: "AvNextBold",
    lineHeight: 19,
    width: "50%",
  },
  row: {
    flexDirection: "row",
  },
});
