import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  txt: string;
  qtt: number;
  unit: string;
}

export const GroceryItem: React.FC<Props> = ({ txt, qtt, unit }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.qtt}>
        {qtt == 0 ? "" : qtt} {unit === "undefined" ? "" : unit}
      </Text>
      <Text style={styles.txt}>{txt}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 13,
    backgroundColor: "#E1DFDF",
    marginBottom: 15,
    borderRadius: 13,
  },
  txt: {
    fontSize: 19,
    color: "#434343",
    fontWeight: "600",
  },
  qtt: {},
  unit: {},
});
